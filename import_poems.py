#!/usr/bin/env python3
"""
从 chinese-poetry 开源数据库导入诗词到 poems.json
数据源: https://github.com/chinese-poetry/chinese-poetry (MIT License)
"""

import json
import urllib.request
import urllib.parse
import os
import time
from collections import Counter
from opencc import OpenCC

CC = OpenCC('t2s')

THEMES = [
    {"name": "思念", "bg": "yearning"},
    {"name": "离别", "bg": "parting"},
    {"name": "田园", "bg": "pastoral"},
    {"name": "山水", "bg": "landscape"},
    {"name": "爱情", "bg": "love"},
    {"name": "伤春", "bg": "spring"},
    {"name": "悲秋", "bg": "autumn"},
    {"name": "咏物", "bg": "contemplation"},
    {"name": "咏史", "bg": "historical"},
    {"name": "乡愁", "bg": "nostalgia"},
    {"name": "豪放", "bg": "heroic"},
    {"name": "婉约", "bg": "graceful"},
    {"name": "禅意", "bg": "zen"},
    {"name": "孤独", "bg": "solitude"},
    {"name": "自由", "bg": "freedom"},
    {"name": "时光", "bg": "time"},
    {"name": "梦境", "bg": "dream"},
    {"name": "治愈", "bg": "healing"},
    {"name": "边塞", "bg": "frontier"},
    {"name": "夜",   "bg": "night"},
]

THEME_NAMES = {t["name"] for t in THEMES}
THEME_BG = {t["name"]: t["bg"] for t in THEMES}

# chinese-poetry tags → 我们的 theme 映射
TAG_TO_THEME = {
    "思乡": "乡愁", "思念": "思念",
    "送别": "离别", "离别": "离别",
    "山水": "山水", "写景": "山水", "田园": "田园",
    "闺怨": "爱情", "爱情": "爱情",
    "春天": "伤春", "伤春": "伤春", "惜春": "伤春",
    "秋天": "悲秋", "悲秋": "悲秋",
    "咏物": "咏物", "梅花": "咏物", "竹": "咏物", "荷": "咏物",
    "菊花": "咏物", "柳": "咏物", "牡丹": "咏物", "松": "咏物",
    "咏史": "咏史", "怀古": "咏史",
    "边塞": "边塞", "战争": "边塞",
    "豪放": "豪放", "励志": "豪放",
    "婉约": "婉约",
    "禅意": "禅意", "哲理": "禅意",
    "孤独": "孤独", "寂寞": "孤独",
    "夜": "夜", "月": "夜",
    "梦": "梦境",
    "闲适": "治愈", "隐居": "治愈",
    "自由": "自由",
    "时光": "时光", "时光流逝": "时光",
}

# 关键词 → 主题 的补充映射
KEYWORD_TO_THEME = {
    "思念": ["思", "忆", "念", "怀人"],
    "离别": ["送别", "送", "赠别", "离"],
    "田园": ["田", "农", "村", "牧", "渔"],
    "山水": ["山", "泉", "瀑", "溪", "湖", "江"],
    "爱情": ["情", "恋", "相思", "红豆"],
    "伤春": ["春归", "春残", "落花", "花落", "惜春"],
    "悲秋": ["秋", "落叶", "萧萧"],
    "咏物": ["咏", "赋得"],
    "咏史": ["古", "咏史", "怀古"],
    "乡愁": ["故乡", "故园", "归", "游子"],
    "豪放": ["壮", "雄", "万里", "千山"],
    "婉约": ["愁", "恨", "泪", "怨"],
    "禅意": ["禅", "悟", "空", "静", "闲"],
    "孤独": ["独", "孤", "寂"],
    "自由": ["醉", "狂", "纵"],
    "时光": ["流年", "岁月", "白发", "暮"],
    "梦境": ["梦"],
    "治愈": ["安", "乐", "喜"],
    "边塞": ["塞", "征", "戍", "烽", "关山"],
    "夜": ["夜", "月", "星"],
}


def fetch_json(url, retries=3):
    encoded_url = urllib.parse.quote(url, safe='/:@!$&\'()*+,;=-._~')
    for attempt in range(retries):
        try:
            req = urllib.request.Request(encoded_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=30) as resp:
                return json.loads(resp.read().decode('utf-8'))
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(1)
            else:
                print(f"  ⚠ 下载失败: {url} - {e}")
                return None


def tags_to_theme(tags):
    for tag in tags:
        if tag in TAG_TO_THEME:
            return TAG_TO_THEME[tag]
    return None


def guess_theme_by_keyword(title, paragraphs):
    text = title + "".join(paragraphs)
    theme_scores = {}
    for theme, keywords in KEYWORD_TO_THEME.items():
        score = sum(1 for kw in keywords if kw in text)
        if score > 0:
            theme_scores[theme] = score
    if theme_scores:
        return max(theme_scores, key=theme_scores.get)
    return None


def is_quality_poem(poem):
    paragraphs = poem.get("paragraphs", [])
    if len(paragraphs) > 12 or len(paragraphs) < 2:
        return False
    if any(len(line) > 30 for line in paragraphs):
        return False
    return True


def download_collection(base_url_template, indices, name):
    all_poems = []
    for i in indices:
        url = base_url_template.format(i)
        data = fetch_json(url)
        if data is None:
            continue
        for p in data:
            if is_quality_poem(p):
                all_poems.append(p)
    print(f"  {name}下载完成: {len(all_poems)} 首符合条件")
    return all_poems


def process_poems(raw_poems, dynasty, category="classical"):
    result = []
    seen_titles = set()

    # 优先处理有 tags 的
    tagged = [p for p in raw_poems if p.get("tags")]
    untagged = [p for p in raw_poems if not p.get("tags")]

    for poem in tagged + untagged:
        title = CC.convert(poem.get("title", poem.get("rhythmic", "")))
        author = CC.convert(poem.get("author", ""))
        paragraphs = [CC.convert(line) for line in poem.get("paragraphs", [])]

        # 清理标题中的序号标记（如 "其一"、"二" 等）
        # 标题去重
        key = f"{title}-{author}"
        if key in seen_titles:
            continue
        seen_titles.add(key)

        # 主题映射
        tags = poem.get("tags", [])
        theme = tags_to_theme(tags)
        if theme is None:
            theme = guess_theme_by_keyword(title, paragraphs)
        if theme is None or theme not in THEME_NAMES:
            continue  # 跳过无法分类的

        # 宋词标题处理
        display_title = title
        rhythmic = poem.get("rhythmic")
        if rhythmic:
            r = CC.convert(rhythmic)
            if title and title != r:
                display_title = f"{r}·{title}"
            elif not title:
                display_title = r

        result.append({
            "title": display_title,
            "author": author,
            "dynasty": dynasty,
            "lines": paragraphs,
            "category": category,
            "theme": theme,
            "theme_bg": THEME_BG[theme],
        })

    return result


def main():
    print("📥 下载 chinese-poetry 数据...")

    tang_base = "https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/全唐诗/poet.tang.{}.json"
    tang_indices = list(range(0, 58000, 1000))
    tang_raw = download_collection(tang_base, tang_indices, "唐诗")

    song_base = "https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/宋词/ci.song.{}.json"
    song_indices = list(range(0, 21000, 1000))
    song_raw = download_collection(song_base, song_indices, "宋词")

    # 元曲
    other_raw = []
    url = "https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/元曲/yuanqu.json"
    data = fetch_json(url)
    if data:
        for p in data:
            if is_quality_poem(p):
                other_raw.append(p)
    print(f"  元曲下载完成: {len(other_raw)} 首")

    print("\n🔄 处理诗词数据...")
    tang_poems = process_poems(tang_raw, "唐")
    song_poems = process_poems(song_raw, "宋")
    other_poems = process_poems(other_raw, "元")

    print(f"  唐诗: {len(tang_poems)} 首")
    print(f"  宋词: {len(song_poems)} 首")
    print(f"  元曲: {len(other_poems)} 首")

    # 读取现有的现代诗和译诗
    with open("poems.json", encoding="utf-8") as f:
        existing = json.load(f)["poems"]

    modern_poems = [p for p in existing if p["category"] in ("modern", "translated")]
    print(f"  保留现代诗/译诗: {len(modern_poems)} 首")

    # 合并去重
    all_new = tang_poems + song_poems + other_poems
    existing_keys = {f"{p['title']}-{p['author']}" for p in modern_poems}

    deduped = []
    for p in all_new:
        key = f"{p['title']}-{p['author']}"
        if key not in existing_keys:
            deduped.append(p)
            existing_keys.add(key)

    # 按主题平衡：每个主题最多保留 80 首
    theme_counts = Counter()
    balanced = []
    for p in deduped:
        if theme_counts[p["theme"]] < 80:
            balanced.append(p)
            theme_counts[p["theme"]] += 1

    # 合并最终结果
    final_poems = modern_poems + balanced

    # 重新编号
    for i, p in enumerate(final_poems, 1):
        p["id"] = i

    # 统计
    theme_final = Counter(p["theme"] for p in final_poems)
    cat_final = Counter(p["category"] for p in final_poems)

    print(f"\n📊 最终统计: 共 {len(final_poems)} 首")
    print("\n  按主题:")
    for theme in [t["name"] for t in THEMES]:
        cnt = theme_final.get(theme, 0)
        print(f"    {theme}: {cnt}")

    print("\n  按类别:")
    for cat, cnt in cat_final.most_common():
        print(f"    {cat}: {cnt}")

    # 输出
    output = {"version": 2, "poems": final_poems}
    with open("poems.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\n✅ poems.json 已更新 ({len(final_poems)} 首)")


if __name__ == "__main__":
    main()
