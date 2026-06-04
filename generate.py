import hashlib
import json
import random
from datetime import datetime

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


def _seed(date_str, offset=0):
    seed_str = f"daily-poem-{date_str}-{offset}"
    return int(hashlib.md5(seed_str.encode()).hexdigest()[:8], 16)


def generate_daily_data(count=50):
    now = datetime.now()
    date_str = now.strftime("%Y-%m-%d")
    weekday = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"][now.weekday()]
    date_display = f"{now.month}月{now.day}日 {weekday}"

    with open("poems.json", encoding="utf-8") as f:
        all_poems = json.load(f)["poems"]

    used_ids = set()
    poems = []

    for offset in range(count):
        rng = random.Random(_seed(date_str, offset))

        # Shuffle-cycle themes: ensure even coverage
        num_themes = len(THEMES)
        round_idx = offset // num_themes
        pos_in_round = offset % num_themes
        shuffle_rng = random.Random(_seed(date_str, round_idx * 1000))
        shuffled = list(THEMES)
        shuffle_rng.shuffle(shuffled)
        theme = shuffled[pos_in_round]

        # Filter by theme, exclude used poems
        candidates = [p for p in all_poems
                      if p["theme"] == theme["name"] and p["id"] not in used_ids]

        if not candidates:
            # Fallback: any unused poem
            candidates = [p for p in all_poems if p["id"] not in used_ids]

        if not candidates:
            break  # all poems used

        poem = rng.choice(candidates)
        used_ids.add(poem["id"])

        poems.append({
            "title": poem["title"],
            "author": poem["author"],
            "dynasty": poem.get("dynasty", ""),
            "lines": poem["lines"],
            "category": poem["category"],
            "theme": theme["name"],
            "theme_bg": theme["bg"],
        })

    result = {
        "date": date_display,
        "generated_at": now.isoformat(),
        "poems": poems,
    }

    with open("docs/data.json", "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"Generated {len(poems)} poems for {date_display}")
    return result


if __name__ == "__main__":
    import os
    os.makedirs("docs", exist_ok=True)
    generate_daily_data(50)
