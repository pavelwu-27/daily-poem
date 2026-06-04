export const config = {
  runtime: 'edge',
};

const THEMES = [
  { name: "思念", bg: "yearning" },
  { name: "离别", bg: "parting" },
  { name: "田园", bg: "pastoral" },
  { name: "山水", bg: "landscape" },
  { name: "爱情", bg: "love" },
  { name: "伤春", bg: "spring" },
  { name: "悲秋", bg: "autumn" },
  { name: "咏物", bg: "contemplation" },
  { name: "咏史", bg: "historical" },
  { name: "乡愁", bg: "nostalgia" },
  { name: "豪放", bg: "heroic" },
  { name: "婉约", bg: "graceful" },
  { name: "禅意", bg: "zen" },
  { name: "孤独", bg: "solitude" },
  { name: "自由", bg: "freedom" },
  { name: "时光", bg: "time" },
  { name: "梦境", bg: "dream" },
  { name: "治愈", bg: "healing" },
  { name: "边塞", bg: "frontier" },
  { name: "夜",   bg: "night" },
];

const POEMS = [
  {id:1,title:"静夜思",author:"李白",dynasty:"唐",lines:["床前明月光，","疑是地上霜。","举头望明月，","低头思故乡。"],category:"classical",theme:"乡愁",theme_bg:"nostalgia"},
  {id:2,title:"春望",author:"杜甫",dynasty:"唐",lines:["国破山河在，","城春草木深。","感时花溅泪，","恨别鸟惊心。"],category:"classical",theme:"咏史",theme_bg:"historical"},
  {id:3,title:"山居秋暝",author:"王维",dynasty:"唐",lines:["空山新雨后，","天气晚来秋。","明月松间照，","清泉石上流。"],category:"classical",theme:"山水",theme_bg:"landscape"},
  {id:4,title:"水调歌头",author:"苏轼",dynasty:"宋",lines:["明月几时有，把酒问青天。","不知天上宫阙，今夕是何年。","但愿人长久，千里共婵娟。"],category:"classical",theme:"思念",theme_bg:"yearning"},
  {id:5,title:"声声慢",author:"李清照",dynasty:"宋",lines:["寻寻觅觅，冷冷清清，","凄凄惨惨戚戚。","乍暖还寒时候，","最难将息。"],category:"classical",theme:"悲秋",theme_bg:"autumn"},
  {id:6,title:"出塞",author:"王昌龄",dynasty:"唐",lines:["秦时明月汉时关，","万里长征人未还。","但使龙城飞将在，","不教胡马度阴山。"],category:"classical",theme:"边塞",theme_bg:"frontier"},
  {id:7,title:"雨霖铃",author:"柳永",dynasty:"宋",lines:["寒蝉凄切，对长亭晚，骤雨初歇。","多情自古伤离别，","更那堪冷落清秋节。","今宵酒醒何处，杨柳岸晓风残月。"],category:"classical",theme:"离别",theme_bg:"parting"},
  {id:8,title:"饮酒·其五",author:"陶渊明",dynasty:"东晋",lines:["结庐在人境，而无车马喧。","问君何能尔，心远地自偏。","采菊东篱下，悠然见南山。"],category:"classical",theme:"禅意",theme_bg:"zen"},
  {id:9,title:"无题",author:"李商隐",dynasty:"唐",lines:["相见时难别亦难，","东风无力百花残。","春蚕到死丝方尽，","蜡炬成灰泪始干。"],category:"classical",theme:"爱情",theme_bg:"love"},
  {id:10,title:"满江红",author:"岳飞",dynasty:"宋",lines:["怒发冲冠，凭栏处、潇潇雨歇。","三十功名尘与土，","八千里路云和月。","莫等闲，白了少年头，空悲切。"],category:"classical",theme:"豪放",theme_bg:"heroic"},
  {id:11,title:"登鹳雀楼",author:"王之涣",dynasty:"唐",lines:["白日依山尽，","黄河入海流。","欲穷千里目，","更上一层楼。"],category:"classical",theme:"豪放",theme_bg:"heroic"},
  {id:12,title:"春晓",author:"孟浩然",dynasty:"唐",lines:["春眠不觉晓，","处处闻啼鸟。","夜来风雨声，","花落知多少。"],category:"classical",theme:"伤春",theme_bg:"spring"},
  {id:13,title:"江雪",author:"柳宗元",dynasty:"唐",lines:["千山鸟飞绝，","万径人踪灭。","孤舟蓑笠翁，","独钓寒江雪。"],category:"classical",theme:"孤独",theme_bg:"solitude"},
  {id:14,title:"枫桥夜泊",author:"张继",dynasty:"唐",lines:["月落乌啼霜满天，","江枫渔火对愁眠。","姑苏城外寒山寺，","夜半钟声到客船。"],category:"classical",theme:"夜",theme_bg:"night"},
  {id:15,title:"送杜少府之任蜀州",author:"王勃",dynasty:"唐",lines:["城阙辅三秦，风烟望五津。","与君离别意，同是宦游人。","海内存知己，天涯若比邻。"],category:"classical",theme:"离别",theme_bg:"parting"},
  {id:16,title:"归园田居·其一",author:"陶渊明",dynasty:"东晋",lines:["少无适俗韵，性本爱丘山。","误落尘网中，一去三十年。","羁鸟恋旧林，池鱼思故渊。"],category:"classical",theme:"田园",theme_bg:"pastoral"},
  {id:17,title:"题西林壁",author:"苏轼",dynasty:"宋",lines:["横看成岭侧成峰，","远近高低各不同。","不识庐山真面目，","只缘身在此山中。"],category:"classical",theme:"禅意",theme_bg:"zen"},
  {id:18,title:"锦瑟",author:"李商隐",dynasty:"唐",lines:["锦瑟无端五十弦，","一弦一柱思华年。","庄生晓梦迷蝴蝶，","望帝春心托杜鹃。"],category:"classical",theme:"梦境",theme_bg:"dream"},
  {id:19,title:"望岳",author:"杜甫",dynasty:"唐",lines:["岱宗夫如何，齐鲁青未了。","造化钟神秀，阴阳割昏晓。","会当凌绝顶，一览众山小。"],category:"classical",theme:"山水",theme_bg:"landscape"},
  {id:20,title:"游子吟",author:"孟郊",dynasty:"唐",lines:["慈母手中线，游子身上衣。","临行密密缝，意恐迟迟归。","谁言寸草心，报得三春晖。"],category:"classical",theme:"乡愁",theme_bg:"nostalgia"},
  {id:21,title:"过零丁洋",author:"文天祥",dynasty:"宋",lines:["辛苦遭逢起一经，","干戈寥落四周星。","人生自古谁无死，","留取丹心照汗青。"],category:"classical",theme:"咏史",theme_bg:"historical"},
  {id:22,title:"念奴娇·赤壁怀古",author:"苏轼",dynasty:"宋",lines:["大江东去，浪淘尽，千古风流人物。","乱石穿空，惊涛拍岸，卷起千堆雪。","人生如梦，一尊还酹江月。"],category:"classical",theme:"豪放",theme_bg:"heroic"},
  {id:23,title:"如梦令",author:"李清照",dynasty:"宋",lines:["昨夜雨疏风骤，","浓睡不消残酒。","试问卷帘人，","却道海棠依旧。"],category:"classical",theme:"伤春",theme_bg:"spring"},
  {id:24,title:"相思",author:"王维",dynasty:"唐",lines:["红豆生南国，","春来发几枝。","愿君多采撷，","此物最相思。"],category:"classical",theme:"思念",theme_bg:"yearning"},
  {id:25,title:"夜雨寄北",author:"李商隐",dynasty:"唐",lines:["君问归期未有期，","巴山夜雨涨秋池。","何当共剪西窗烛，","却话巴山夜雨时。"],category:"classical",theme:"思念",theme_bg:"yearning"},
  {id:26,title:"凉州词",author:"王翰",dynasty:"唐",lines:["葡萄美酒夜光杯，","欲饮琵琶马上催。","醉卧沙场君莫笑，","古来征战几人回。"],category:"classical",theme:"边塞",theme_bg:"frontier"},
  {id:27,title:"月下独酌",author:"李白",dynasty:"唐",lines:["花间一壶酒，独酌无相亲。","举杯邀明月，对影成三人。","月既不解饮，影徒随我身。"],category:"classical",theme:"孤独",theme_bg:"solitude"},
  {id:28,title:"赋得古原草送别",author:"白居易",dynasty:"唐",lines:["离离原上草，一岁一枯荣。","野火烧不尽，春风吹又生。","又送王孙去，萋萋满别情。"],category:"classical",theme:"离别",theme_bg:"parting"},
  {id:29,title:"登高",author:"杜甫",dynasty:"唐",lines:["风急天高猿啸哀，","渚清沙白鸟飞回。","无边落木萧萧下，","不尽长江滚滚来。"],category:"classical",theme:"悲秋",theme_bg:"autumn"},
  {id:30,title:"竹石",author:"郑燮",dynasty:"清",lines:["咬定青山不放松，","立根原在破岩中。","千磨万击还坚劲，","任尔东西南北风。"],category:"classical",theme:"咏物",theme_bg:"contemplation"},
  {id:31,title:"石灰吟",author:"于谦",dynasty:"明",lines:["千锤万凿出深山，","烈火焚烧若等闲。","粉骨碎身浑不怕，","要留清白在人间。"],category:"classical",theme:"咏物",theme_bg:"contemplation"},
  {id:32,title:"短歌行",author:"曹操",dynasty:"东汉",lines:["对酒当歌，人生几何！","譬如朝露，去日苦多。","慨当以慷，忧思难忘。","何以解忧？唯有杜康。"],category:"classical",theme:"时光",theme_bg:"time"},
  {id:33,title:"望庐山瀑布",author:"李白",dynasty:"唐",lines:["日照香炉生紫烟，","遥看瀑布挂前川。","飞流直下三千尺，","疑是银河落九天。"],category:"classical",theme:"山水",theme_bg:"landscape"},
  {id:34,title:"泊船瓜洲",author:"王安石",dynasty:"宋",lines:["京口瓜洲一水间，","钟山只隔数重山。","春风又绿江南岸，","明月何时照我还。"],category:"classical",theme:"乡愁",theme_bg:"nostalgia"},
  {id:35,title:"虞美人",author:"李煜",dynasty:"南唐",lines:["春花秋月何时了，往事知多少。","小楼昨夜又东风，","故国不堪回首月明中。","问君能有几多愁，恰似一江春水向东流。"],category:"classical",theme:"咏史",theme_bg:"historical"},
  {id:36,title:"春江花月夜",author:"张若虚",dynasty:"唐",lines:["春江潮水连海平，","海上明月共潮生。","滟滟随波千万里，","何处春江无月明。"],category:"classical",theme:"夜",theme_bg:"night"},
  {id:37,title:"将进酒",author:"李白",dynasty:"唐",lines:["君不见黄河之水天上来，奔流到海不复回。","君不见高堂明镜悲白发，朝如青丝暮成雪。","人生得意须尽欢，莫使金樽空对月。"],category:"classical",theme:"自由",theme_bg:"freedom"},
  {id:38,title:"鹊桥仙",author:"秦观",dynasty:"宋",lines:["纤云弄巧，飞星传恨，银汉迢迢暗度。","金风玉露一相逢，便胜却人间无数。","两情若是久长时，又岂在朝朝暮暮。"],category:"classical",theme:"爱情",theme_bg:"love"},
  {id:39,title:"饮酒·其五（续）",author:"陶渊明",dynasty:"东晋",lines:["山气日夕佳，飞鸟相与还。","此中有真意，欲辨已忘言。"],category:"classical",theme:"禅意",theme_bg:"zen"},
  {id:40,title:"绝句",author:"杜甫",dynasty:"唐",lines:["两个黄鹂鸣翠柳，","一行白鹭上青天。","窗含西岭千秋雪，","门泊东吴万里船。"],category:"classical",theme:"田园",theme_bg:"pastoral"},
  {id:41,title:"卜算子·咏梅",author:"陆游",dynasty:"宋",lines:["驿外断桥边，寂寞开无主。","已是黄昏独自愁，更著风和雨。","零落成泥碾作尘，只有香如故。"],category:"classical",theme:"咏物",theme_bg:"contemplation"},
  {id:42,title:"敕勒歌",author:"佚名",dynasty:"北朝",lines:["敕勒川，阴山下，","天似穹庐，笼盖四野。","天苍苍，野茫茫，","风吹草低见牛羊。"],category:"classical",theme:"田园",theme_bg:"pastoral"},
  {id:43,title:"长恨歌（节选）",author:"白居易",dynasty:"唐",lines:["在天愿作比翼鸟，","在地愿为连理枝。","天长地久有时尽，","此恨绵绵无绝期。"],category:"classical",theme:"爱情",theme_bg:"love"},
  {id:44,title:"相见欢",author:"李煜",dynasty:"南唐",lines:["无言独上西楼，月如钩。","寂寞梧桐深院锁清秋。","剪不断，理还乱，是离愁。","别是一般滋味在心头。"],category:"classical",theme:"离别",theme_bg:"parting"},
  {id:45,title:"黄鹤楼送孟浩然之广陵",author:"李白",dynasty:"唐",lines:["故人西辞黄鹤楼，","烟花三月下扬州。","孤帆远影碧空尽，","唯见长江天际流。"],category:"classical",theme:"离别",theme_bg:"parting"},
  {id:46,title:"夜泊牛渚怀古",author:"李白",dynasty:"唐",lines:["牛渚西江夜，青天无片云。","登舟望秋月，空忆谢将军。"],category:"classical",theme:"夜",theme_bg:"night"},
  {id:47,title:"行路难",author:"李白",dynasty:"唐",lines:["长风破浪会有时，","直挂云帆济沧海。"],category:"classical",theme:"自由",theme_bg:"freedom"},
  {id:48,title:"离思五首·其四",author:"元稹",dynasty:"唐",lines:["曾经沧海难为水，","除却巫山不是云。","取次花丛懒回顾，","半缘修道半缘君。"],category:"classical",theme:"思念",theme_bg:"yearning"},
  {id:49,title:"己亥杂诗",author:"龚自珍",dynasty:"清",lines:["九州生气恃风雷，","万马齐喑究可哀。","我劝天公重抖擞，","不拘一格降人才。"],category:"classical",theme:"豪放",theme_bg:"heroic"},
  {id:50,title:"乌衣巷",author:"刘禹锡",dynasty:"唐",lines:["朱雀桥边野草花，","乌衣巷口夕阳斜。","旧时王谢堂前燕，","飞入寻常百姓家。"],category:"classical",theme:"时光",theme_bg:"time"},
  {id:51,title:"天净沙·秋思",author:"马致远",dynasty:"元",lines:["枯藤老树昏鸦，","小桥流水人家，","古道西风瘦马。","夕阳西下，断肠人在天涯。"],category:"classical",theme:"悲秋",theme_bg:"autumn"},
  {id:52,title:"过故人庄",author:"孟浩然",dynasty:"唐",lines:["故人具鸡黍，邀我至田家。","绿树村边合，青山郭外斜。","开轩面场圃，把酒话桑麻。"],category:"classical",theme:"田园",theme_bg:"pastoral"},
  {id:53,title:"月夜忆舍弟",author:"杜甫",dynasty:"唐",lines:["戍鼓断人行，边秋一雁声。","露从今夜白，月是故乡明。"],category:"classical",theme:"思念",theme_bg:"yearning"},
  {id:54,title:"独坐敬亭山",author:"李白",dynasty:"唐",lines:["众鸟高飞尽，","孤云独去闲。","相看两不厌，","只有敬亭山。"],category:"classical",theme:"孤独",theme_bg:"solitude"},
  {id:55,title:"饮酒（其五）",author:"陶渊明",dynasty:"东晋",lines:["采菊东篱下，悠然见南山。","山气日夕佳，飞鸟相与还。","此中有真意，欲辨已忘言。"],category:"classical",theme:"治愈",theme_bg:"healing"},
  {id:56,title:"滁州西涧",author:"韦应物",dynasty:"唐",lines:["独怜幽草涧边生，","上有黄鹂深树鸣。","春潮带雨晚来急，","野渡无人舟自横。"],category:"classical",theme:"孤独",theme_bg:"solitude"},
  {id:57,title:"梦游天姥吟留别（节选）",author:"李白",dynasty:"唐",lines:["霓为衣兮风为马，","云之君兮纷纷而来下。","虎鼓瑟兮鸾回车，","仙之人兮列如麻。"],category:"classical",theme:"梦境",theme_bg:"dream"},
  {id:58,title:"题临安邸",author:"林升",dynasty:"宋",lines:["山外青山楼外楼，","西湖歌舞几时休？","暖风熏得游人醉，","直把杭州作汴州。"],category:"classical",theme:"咏史",theme_bg:"historical"},
  {id:59,title:"暮江吟",author:"白居易",dynasty:"唐",lines:["一道残阳铺水中，","半江瑟瑟半江红。","可怜九月初三夜，","露似真珠月似弓。"],category:"classical",theme:"伤春",theme_bg:"spring"},
  {id:60,title:"梅花",author:"王安石",dynasty:"宋",lines:["墙角数枝梅，","凌寒独自开。","遥知不是雪，","为有暗香来。"],category:"classical",theme:"咏物",theme_bg:"contemplation"},
  {id:61,title:"再别康桥",author:"徐志摩",dynasty:"",lines:["轻轻的我走了，","正如我轻轻的来；","我轻轻的招手，","作别西天的云彩。"],category:"modern",theme:"离别",theme_bg:"parting"},
  {id:62,title:"面朝大海，春暖花开",author:"海子",dynasty:"",lines:["从明天起，做一个幸福的人","喂马，劈柴，周游世界","从明天起，关心粮食和蔬菜","我有一所房子，面朝大海，春暖花开"],category:"modern",theme:"治愈",theme_bg:"healing"},
  {id:63,title:"一代人",author:"顾城",dynasty:"",lines:["黑夜给了我黑色的眼睛，","我却用它寻找光明。"],category:"modern",theme:"自由",theme_bg:"freedom"},
  {id:64,title:"雨巷",author:"戴望舒",dynasty:"",lines:["撑着油纸伞，独自","彷徨在悠长、悠长","又寂寥的雨巷，","我希望逢着","一个丁香一样地","结着愁怨的姑娘。"],category:"modern",theme:"婉约",theme_bg:"graceful"},
  {id:65,title:"乡愁",author:"余光中",dynasty:"",lines:["小时候，","乡愁是一枚小小的邮票，","我在这头，","母亲在那头。"],category:"modern",theme:"乡愁",theme_bg:"nostalgia"},
  {id:66,title:"致橡树",author:"舒婷",dynasty:"",lines:["我如果爱你——","绝不像攀援的凌霄花，","借你的高枝炫耀自己；","我必须是你近旁的一株木棉，","作为树的形象和你站在一起。"],category:"modern",theme:"爱情",theme_bg:"love"},
  {id:67,title:"远和近",author:"顾城",dynasty:"",lines:["你，","一会看我，","一会看云。","我觉得，","你看我时很远，","你看云时很近。"],category:"modern",theme:"孤独",theme_bg:"solitude"},
  {id:68,title:"断章",author:"卞之琳",dynasty:"",lines:["你站在桥上看风景，","看风景人在楼上看你。","明月装饰了你的窗子，","你装饰了别人的梦。"],category:"modern",theme:"禅意",theme_bg:"zen"},
  {id:69,title:"相信未来",author:"食指",dynasty:"",lines:["当蜘蛛网无情地查封了我的炉台，","当灰烬的余烟叹息着贫困的悲哀，","我依然固执地铺平失望的灰烬，","用美丽的雪花写下：相信未来。"],category:"modern",theme:"自由",theme_bg:"freedom"},
  {id:70,title:"我爱这土地",author:"艾青",dynasty:"",lines:["为什么我的眼里常含泪水？","因为我对这土地爱得深沉……"],category:"modern",theme:"乡愁",theme_bg:"nostalgia"},
  {id:71,title:"错误",author:"郑愁予",dynasty:"",lines:["我打江南走过","那等在季节里的容颜如莲花的开落","东风不来，三月的柳絮不飞","你的心如小小的寂寞的城"],category:"modern",theme:"伤春",theme_bg:"spring"},
  {id:72,title:"一棵开花的树",author:"席慕蓉",dynasty:"",lines:["如何让你遇见我","在我最美丽的时刻","为这——我已在佛前求了五百年","求他让我们结一段尘缘"],category:"modern",theme:"思念",theme_bg:"yearning"},
  {id:73,title:"回答",author:"北岛",dynasty:"",lines:["卑鄙是卑鄙者的通行证，","高尚是高尚者的墓志铭。","看吧，在那镀金的天空中，","飘满了死者弯曲的倒影。"],category:"modern",theme:"豪放",theme_bg:"heroic"},
  {id:74,title:"日记",author:"海子",dynasty:"",lines:["姐姐，今夜我在德令哈，夜色笼罩","姐姐，今夜我只有戈壁","草原尽头我两手空空","悲痛时握不住一颗泪滴"],category:"modern",theme:"孤独",theme_bg:"solitude"},
  {id:75,title:"偶然",author:"徐志摩",dynasty:"",lines:["我是天空里的一片云，","偶尔投影在你的波心——","你不必讶异，","更无须欢喜——","在转瞬间消灭了踪影。"],category:"modern",theme:"婉约",theme_bg:"graceful"},
  {id:76,title:"秋天",author:"何其芳",dynasty:"",lines:["震落了清晨满披着的露珠，","伐木声丁丁地飘出幽谷。","放下饱食过稻香的镰刀，","用背篓来装竹篱间肥硕的瓜果。"],category:"modern",theme:"悲秋",theme_bg:"autumn"},
  {id:77,title:"假如生活欺骗了你",author:"普希金",dynasty:"",lines:["假如生活欺骗了你，","不要悲伤，不要心急！","忧郁的日子里须要镇静：","相信吧，快乐的日子将会来临。"],category:"translated",theme:"治愈",theme_bg:"healing"},
  {id:78,title:"飞鸟集（选）",author:"泰戈尔",dynasty:"",lines:["世界以痛吻我，","要我报之以歌。"],category:"translated",theme:"禅意",theme_bg:"zen"},
  {id:79,title:"当你老了",author:"叶芝",dynasty:"",lines:["当你老了，头发花白，睡意沉沉，","倦坐在炉边，取下这本书来，","慢慢读着，追梦当年的眼神","那柔美的神采与深幽的晕影。"],category:"translated",theme:"时光",theme_bg:"time"},
  {id:80,title:"豹",author:"里尔克",dynasty:"",lines:["它的目光被那走不完的铁栏","缠得这般疲倦，什么也收留。","好像只有千条的铁栏杆，","千条的铁栏后便没有宇宙。"],category:"translated",theme:"孤独",theme_bg:"solitude"},
  {id:81,title:"先知（选）",author:"纪伯伦",dynasty:"",lines:["你的孩子，其实不是你的孩子，","他们是生命对自己渴望而诞生的孩子。","他们通过你来到这世界，","却非因你而来。"],category:"translated",theme:"自由",theme_bg:"freedom"},
  {id:82,title:"未选择的路",author:"弗罗斯特",dynasty:"",lines:["黄树林里分叉两条路，","而我选择了人迹更少的一条，","从此决定了我一生的道路。"],category:"translated",theme:"自由",theme_bg:"freedom"},
  {id:83,title:"二十首情诗和一首绝望的歌（选）",author:"聂鲁达",dynasty:"",lines:["我喜欢你是寂静的，仿佛你消失了一样，","你从远处聆听我，我的声音却无法触及你。","让我在你的沉默中安静无声。"],category:"translated",theme:"爱情",theme_bg:"love"},
  {id:84,title:"我愿意是急流",author:"裴多菲",dynasty:"",lines:["我愿意是急流，山里的小河，","在崎岖的路上、岩石上经过……","只要我的爱人是一条小鱼，","在我的浪花中快乐地游来游去。"],category:"translated",theme:"爱情",theme_bg:"love"},
  {id:85,title:"无论你如何",author:"狄金森",dynasty:"",lines:["「希望」是长着羽毛的鸟儿，","栖息在灵魂深处，","唱着无词的歌，","永不停歇。"],category:"translated",theme:"治愈",theme_bg:"healing"},
  {id:86,title:"了不起的东西",author:"叶芝",dynasty:"",lines:["走吧，人间的孩子！","与一个精灵手拉着手，","走向荒野和河流，","这世界哭声太多，你不懂。"],category:"translated",theme:"梦境",theme_bg:"dream"},
  {id:87,title:"吉檀迦利（选）",author:"泰戈尔",dynasty:"",lines:["在那里，心灵是无畏的，头是高昂的；","在那里，知识是自由的；","在那里，世界还没有被狭小的家国的墙","隔成片断。"],category:"translated",theme:"自由",theme_bg:"freedom"},
  {id:88,title:"荒原（选）",author:"艾略特",dynasty:"",lines:["四月是最残忍的月份，","从死了的土地里培育出丁香，","把记忆和欲望混合在一起，","用春雨搅动迟钝的根。"],category:"translated",theme:"悲秋",theme_bg:"autumn"},
  {id:89,title:"星星",author:"索德格朗",dynasty:"",lines:["当夜色降临，","我站在台阶上倾听；","星星蜂拥在花园里，","而我站在黑暗中。"],category:"translated",theme:"夜",theme_bg:"night"},
  {id:90,title:"最甜蜜的短歌",author:"辛波斯卡",dynasty:"",lines:["我偏爱电影。","我偏爱猫。","我偏爱华尔塔河沿岸的橡树。","我偏爱狄更斯胜过陀思妥耶夫斯基。"],category:"translated",theme:"婉约",theme_bg:"graceful"},
  {id:91,title:"见与不见",author:"扎西拉姆·多多",dynasty:"",lines:["你见，或者不见我","我就在那里","不悲不喜","你念，或者不念我","情就在那里","不来不去"],category:"modern",theme:"思念",theme_bg:"yearning"},
  {id:92,title:"从前慢",author:"木心",dynasty:"",lines:["从前的日色变得慢","车，马，邮件都慢","一生只够爱一个人"],category:"modern",theme:"时光",theme_bg:"time"},
  {id:93,title:"青春",author:"席慕蓉",dynasty:"",lines:["所有的结局都已写好","所有的泪水也都已启程","却忽然忘了是怎么样的一个开始","在那个古老的不再回来的夏日"],category:"modern",theme:"伤春",theme_bg:"spring"},
  {id:94,title:"剧本",author:"席慕蓉",dynasty:"",lines:["请不要相信我的美丽","也不要相信我的爱情","在涂满了油彩的面容之下","我有的是一颗戏子的心"],category:"modern",theme:"婉约",theme_bg:"graceful"},
  {id:95,title:"以梦为马",author:"海子",dynasty:"",lines:["我要做远方的忠诚的儿子","和物质的短暂情人","和所有以梦为马的诗人一样","我不得不和烈士和小丑走在同一道路上"],category:"modern",theme:"豪放",theme_bg:"heroic"},
  {id:96,title:"门前",author:"顾城",dynasty:"",lines:["我多么希望，有一个门口","早晨，阳光照在草上","我们站着","扶着自己的门扇","门很低，但太阳是明亮的"],category:"modern",theme:"治愈",theme_bg:"healing"},
  {id:97,title:"月光",author:"海子",dynasty:"",lines:["今夜美丽的月光 你看我多美丽","月光照着月光 月光普照","月光啊月光 你在何方","今夜美丽的月光 你看我们多美丽"],category:"modern",theme:"夜",theme_bg:"night"},
  {id:98,title:"葬花吟（节选）",author:"曹雪芹",dynasty:"清",lines:["花谢花飞花满天，","红消香断有谁怜？","游丝软系飘春榭，","落絮轻沾扑绣帘。"],category:"classical",theme:"伤春",theme_bg:"spring"},
  {id:99,title:"登飞来峰",author:"王安石",dynasty:"宋",lines:["飞来山上千寻塔，","闻说鸡鸣见日升。","不畏浮云遮望眼，","自缘身在最高层。"],category:"classical",theme:"豪放",theme_bg:"heroic"},
  {id:100,title:"送元二使安西",author:"王维",dynasty:"唐",lines:["渭城朝雨浥轻尘，","客舍青青柳色新。","劝君更尽一杯酒，","西出阳关无故人。"],category:"classical",theme:"离别",theme_bg:"parting"},
  {id:101,title:"如果冬天来了",author:"雪莱",dynasty:"",lines:["冬天如果来了，","春天还会远吗？"],category:"translated",theme:"治愈",theme_bg:"healing"},
  {id:102,title:"一见钟情",author:"辛波斯卡",dynasty:"",lines:["他们两人都相信","是一股突发的热情让他俩交会。","这样的笃定是美丽的，","但变化无常更为美丽。"],category:"translated",theme:"爱情",theme_bg:"love"},
  {id:103,title:"月光",author:"贝克特",dynasty:"",lines:["在月光下我独自走着，","这条路我曾走过多次，","但这一次，月光不同了，","它照亮了我从未见过的东西。"],category:"translated",theme:"夜",theme_bg:"night"},
  {id:104,title:"致大海",author:"普希金",dynasty:"",lines:["再见吧，自由的原素！","这是你最后一次在我的眼前，","翻滚着蔚蓝色的波浪，","和闪耀着骄傲的美容。"],category:"translated",theme:"自由",theme_bg:"freedom"},
  {id:105,title:"秋日",author:"里尔克",dynasty:"",lines:["谁此时没有房子，就不必建造，","谁此时孤独，就永远孤独，","就醒来，读书，写长长的信，","在林荫路上不停地","徘徊，落叶纷飞。"],category:"translated",theme:"悲秋",theme_bg:"autumn"},
  {id:106,title:"雪夜林边逗留",author:"弗罗斯特",dynasty:"",lines:["树林美丽、幽暗而深邃，","但我有诺言要遵守，","还要行数里路才可安睡，","还要行数里路才可安睡。"],category:"translated",theme:"夜",theme_bg:"night"},
  {id:107,title:"教我如何不想她",author:"刘半农",dynasty:"",lines:["天上飘着些微云，","地上吹着些微风。","啊！","微风吹动了我头发，","教我如何不想她？"],category:"modern",theme:"思念",theme_bg:"yearning"},
  {id:108,title:"你是人间的四月天",author:"林徽因",dynasty:"",lines:["我说你是人间的四月天，","笑响点亮了四面风，","轻灵在春的光艳中交舞着变。","你是一树一树的花开，","是燕在梁间呢喃。"],category:"modern",theme:"伤春",theme_bg:"spring"},
  {id:109,title:"沙扬娜拉",author:"徐志摩",dynasty:"",lines:["最是那一低头的温柔，","像一朵水莲花不胜凉风的娇羞，","道一声珍重，道一声珍重，","那一声珍重里有甜蜜的忧愁——","沙扬娜拉！"],category:"modern",theme:"婉约",theme_bg:"graceful"},
  {id:110,title:"过华清宫",author:"杜牧",dynasty:"唐",lines:["长安回望绣成堆，","山顶千门次第开。","一骑红尘妃子笑，","无人知是荔枝来。"],category:"classical",theme:"咏史",theme_bg:"historical"},
];

function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function hashSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export default async function handler(req) {
  const url = new URL(req.url);
  const offset = parseInt(url.searchParams.get("offset") || "0");

  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const month = now.getMonth() + 1;
  const weekday = ["周日","周一","周二","周三","周四","周五","周六"][now.getDay()];
  const dateDisplay = `${month}月${now.getDate()}日 ${weekday}`;

  const seed = hashSeed(`daily-poem-${dateStr}-${offset}`);
  const rng = seededRandom(seed);

  // Shuffle-cycle themes
  const numThemes = THEMES.length;
  const roundIdx = Math.floor(offset / numThemes);
  const posInRound = offset % numThemes;
  const shuffleRng = seededRandom(hashSeed(`daily-poem-${dateStr}-${roundIdx * 1000}`));
  const shuffled = [...THEMES];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(shuffleRng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const theme = shuffled[posInRound];

  // Filter by theme, use offset to deterministically pick
  const candidates = POEMS.filter(p => p.theme === theme.name);
  if (!candidates.length) {
    return new Response(JSON.stringify({ error: "未找到诗词" }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }

  const poem = candidates[offset % candidates.length];

  return new Response(JSON.stringify({
    title: poem.title,
    author: poem.author,
    dynasty: poem.dynasty,
    lines: poem.lines,
    category: poem.category,
    theme: theme.name,
    theme_bg: theme.bg,
  }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=300",
    },
  });
}
