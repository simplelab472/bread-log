
const STORAGE_KEY = "breadLogIBM010C_v33";

const officialRecipeCatalog = [
["基本","食パン"],["基本","ハーフ食パン"],["基本","ふんわり食パン"],["基本","早焼きパン"],["基本","ごはんパン"],
["基本","フランスパン"],["基本","サンドイッチ用食パン"],["基本","BLTサンド"],["基本","全粒粉パン"],["基本","ライ麦パン"],
["基本","米粉パン(小麦入り)"],["基本","米粉パン(グルテンフリー)"],["基本","デニッシュ風食パン"],["基本","スイート食パン"],["基本","ベジタブルパン"],
["定番","レーズン食パン"],["定番","甘栗とクルミのパン"],["定番","じゃがいもとベーコンのパン"],["定番","コーンパン"],["定番","ピザ風トマトパン"],
["定番","えだまめチーズパン"],["定番","スキムミルク不使用食パン"],["定番","バターロール"],["定番","クロワッサン"],["定番","メロンパン"],["定番","あんぱん"],
["ヘルシー","豆乳パン"],["ヘルシー","アーモンドミルクパン"],["ヘルシー","オリーブオイルパン"],["ヘルシー","卵不使用ちぎりパン"],
["ヘルシー","かぼちゃ米粉パン(グルテンフリー）"],["ヘルシー","ドライフルーツ米粉パン(グルテンフリー）"],["ヘルシー","米粉のベーコンエピ"],["ヘルシー","米粉の黒ごまスティックパン"],
["アレンジ","手ごね動物パン"],["アレンジ","くまさんちぎりパン"],["アレンジ","おたのしみちぎりパン"],["アレンジ","チョコチップスティックパン"],["アレンジ","フルーツたっぷりサンドイッチ"],["アレンジ","4種の手作りピザ"],
["WEB限定","ドライフルーツと全粒粉の食パン"],["WEB限定","白パン"],["WEB限定","いちじくとクルミのライ麦パン"],["WEB限定","バタースコッチ風パン"],
["WEB限定","ほうじ茶黒豆パン"],["WEB限定","フォカッチャ"],["WEB限定","さつまいものパン"],["WEB限定","シナモンロール"],["WEB限定","ねじりドーナツ"],["WEB限定","チョコパン"],
["生地","パン生地"],["生地","ふんわりパン生地"],["生地","ピザ生地"],["生地","うどん・パスタ生地"],["生地","そば生地"],
["その他","ケーキ"],["その他","いちごジャム"],["その他","ブルーベリージャム"],["その他","あん"],["その他","うどん（肉うどん）"],["その他","そば（とりの南蛮風つけそば）"],["その他","パスタ（カルボナーラ）"],["その他","甘酒"],["その他","もち"]
];


const OFFICIAL_BASE = "https://www.irisohyama.co.jp/home-bakery/compact-type/recipe/detail/?";
const officialSourceMap = {
  "食パン":"c=1&r=1&s=1","ハーフ食パン":"c=1&r=2&s=1","ふんわり食パン":"c=1&r=3&s=1","早焼きパン":"c=1&r=4&s=1",
  "ごはんパン":"c=1&r=5&s=1","フランスパン":"c=1&r=6&s=1","サンドイッチ用食パン":"c=1&r=7&s=1","BLTサンド":"c=1&r=8&s=1",
  "全粒粉パン":"c=1&r=9&s=1","ライ麦パン":"c=1&r=10&s=1","米粉パン(小麦入り)":"c=1&r=11&s=1","米粉パン(グルテンフリー)":"c=1&r=12&s=1",
  "デニッシュ風食パン":"c=1&r=13&s=1","スイート食パン":"c=1&r=14&s=1","ベジタブルパン":"c=1&r=15&s=1",
  "レーズン食パン":"c=2&r=16&s=1","スキムミルク不使用食パン":"c=2&r=17&s=1","甘栗とクルミのパン":"c=2&r=18&s=1",
  "じゃがいもとベーコンのパン":"c=2&r=19&s=1","えだまめチーズパン":"c=2&r=20&s=1","ピザ風トマトパン":"c=2&r=21&s=1",
  "コーンパン":"c=2&r=22&s=1","バターロール":"c=2&r=23&s=1","クロワッサン":"c=2&r=24&s=1","メロンパン":"c=2&r=25&s=1","あんぱん":"c=2&r=26&s=1",
  "豆乳パン":"c=3&r=27&s=1","アーモンドミルクパン":"c=3&r=28&s=1","オリーブオイルパン":"c=3&r=29&s=1","卵不使用ちぎりパン":"c=3&r=30&s=1",
  "かぼちゃ米粉パン(グルテンフリー）":"c=3&r=31&s=1","ドライフルーツ米粉パン(グルテンフリー）":"c=3&r=32&s=1",
  "米粉のベーコンエピ":"c=3&r=33&s=1","米粉の黒ごまスティックパン":"c=3&r=34&s=1",
  "手ごね動物パン":"c=4&r=35&s=1","くまさんちぎりパン":"c=4&r=36&s=1","おたのしみちぎりパン":"c=4&r=37&s=1",
  "チョコチップスティックパン":"c=4&r=38&s=1","フルーツたっぷりサンドイッチ":"c=4&r=39&s=1","4種の手作りピザ":"c=4&r=40&s=1",
  "ドライフルーツと全粒粉の食パン":"c=5&r=51&s=1","白パン":"c=5&r=52&s=1","いちじくとクルミのライ麦パン":"c=5&r=53&s=1",
  "バタースコッチ風パン":"c=5&r=54&s=1","ほうじ茶黒豆パン":"c=5&r=55&s=1","フォカッチャ":"c=5&r=56&s=1",
  "さつまいものパン":"c=5&r=57&s=1","シナモンロール":"c=5&r=58&s=1","ねじりドーナツ":"c=5&r=59&s=1","チョコパン":"c=5&r=60&s=1",
  "パスタ（カルボナーラ）":"c=6&r=41&s=1","うどん（肉うどん）":"c=6&r=42&s=1","そば（とりの南蛮風つけそば）":"c=6&r=43&s=1",
  "ケーキ":"c=6&r=44&s=1","いちごジャム":"c=6&r=45&s=1","ブルーベリージャム":"c=6&r=46&s=1","あん":"c=6&r=47&s=1",
  "甘酒":"c=6&r=48&s=1","もち":"c=6&r=49&s=1","よもぎもち":"c=6&r=50&s=1"
};

const verifiedDetails = {
  "食パン":{menuNo:"1",menuName:"食パン",ingredients:[["水","180","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2.7","g"]],steps:["水→強力粉→砂糖・塩・スキムミルク・バター→ドライイーストの順に入れる。","メニュー1「食パン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "ハーフ食パン":{menuNo:"2",menuName:"ハーフ食パン",ingredients:[["水","110","g"],["強力粉","150","g"],["バター","10","g"],["砂糖","10","g"],["塩","3","g"],["スキムミルク","4","g"],["ドライイースト","2.5","g"]],steps:["材料を公式の順序でケースに入れる。","メニュー2「ハーフ食パン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "ふんわり食パン":{menuNo:"3",menuName:"ふんわり食パン",ingredients:[["水","50","g"],["牛乳","90","g"],["生クリーム","50","g"],["強力粉","230","g"],["バター","15","g"],["砂糖","5","g"],["水あめ","25","g"],["塩","4","g"],["ドライイースト","1.5","g"]],steps:["液体類、粉類、糖類・塩・バター、最後にドライイーストの順で入れる。","メニュー3「ふんわり食パン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "早焼きパン":{menuNo:"4",menuName:"早焼きパン",ingredients:[["水","180","g"],["強力粉","250","g"],["バター","13","g"],["砂糖","15","g"],["塩","4","g"],["スキムミルク","8","g"],["ドライイースト","3.5","g"]],steps:["材料を公式順に入れる。","メニュー4「早焼きパン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "ごはんパン":{menuNo:"10",menuName:"ごはんパン",ingredients:[["水","140","g"],["強力粉","250","g"],["冷やごはん","150","g"],["バター","18","g"],["砂糖","20","g"],["塩","6","g"],["スキムミルク","8","g"],["ドライイースト","2.7","g"]],steps:["冷やごはんを水に約1時間浸してふやかす。","その上に残りの材料を公式順に入れる。","メニュー10「ごはんパン」でスタートし、焼き上がったら粗熱を取る。"]},
  "フランスパン":{menuNo:"6",menuName:"フランスパン",ingredients:[["水","200","g"],["強力粉","260","g"],["薄力粉","30","g"],["バター","6","g"],["砂糖","4","g"],["塩","4.5","g"],["スキムミルク","6","g"],["ドライイースト","3","g"]],steps:["材料を公式順に入れる。","メニュー6「フランスパン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "サンドイッチ用食パン":{menuNo:"5",menuName:"サンドイッチ用食パン",ingredients:[["水","170","g"],["強力粉","215","g"],["薄力粉","35","g"],["バター","9","g"],["砂糖","8","g"],["塩","4","g"],["ドライイースト","2.7","g"]],steps:["材料を公式順に入れる。","メニュー5「サンドイッチ用食パン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "全粒粉パン":{menuNo:"7",menuName:"全粒粉パン",ingredients:[["水","200","g"],["強力粉","130","g"],["全粒粉","130","g"],["バター","17","g"],["砂糖","17","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","3","g"]],steps:["材料を公式順に入れる。","メニュー7「全粒粉パン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "ライ麦パン":{menuNo:"11",menuName:"ライ麦パン",ingredients:[["水","170","g"],["強力粉","170","g"],["ライ麦粉","90","g"],["バター","12","g"],["砂糖","17","g"],["塩","4","g"],["スキムミルク","4","g"],["ドライイースト","1.5","g"]],steps:["材料を公式順に入れる。","メニュー11「ライ麦パン」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "米粉パン(小麦入り)":{menuNo:"8",menuName:"米粉パン（小麦入り）",ingredients:[["水","160","g"],["米粉(小麦グルテン配合)","250","g"],["バター","20","g"],["砂糖","19","g"],["塩","3","g"],["スキムミルク","7","g"],["ドライイースト","3.2","g"]],steps:["材料を公式順に入れる。","メニュー8「米粉パン（小麦入り）」でスタートする。","焼き上がったら取り出して粗熱を取る。"]},
  "米粉パン(グルテンフリー)":{menuNo:"9",menuName:"米粉パン（グルテンフリー）",ingredients:[["水","220","g"],["米粉(グルテンフリー)","250","g"],["バター","20","g"],["砂糖","15","g"],["塩","4","g"],["ドライイースト","3.7","g"]],steps:["材料を公式順に入れる。","メニュー9「米粉パン（グルテンフリー）」でスタートする。","粉落としのお知らせ音が鳴ったらケース内側の粉を落とす。","焼き上がったら取り出して粗熱を取る。"]},
  "デニッシュ風食パン":{menuNo:"12",menuName:"デニッシュ風食パン",ingredients:[["水","140","g（卵と合わせて）"],["卵","50","g"],["強力粉","200","g"],["薄力粉","50","g"],["バター","70","g"],["砂糖","40","g"],["塩","4","g"],["スキムミルク","18","g"],["ドライイースト","2","g"]],steps:["水と卵、粉類、砂糖・塩・スキムミルク・バター、最後にドライイーストを入れる。","メニュー12「デニッシュ風食パン」でスタートする。","焼き上がったら粗熱を取る。"]},
  "スイート食パン":{menuNo:"13",menuName:"スイート食パン",ingredients:[["牛乳","190","g（卵と合わせて）"],["卵","50","g"],["強力粉","150","g"],["ホットケーキミックス","150","g"],["バター","40","g"],["砂糖","40","g"],["塩","3","g"],["ドライイースト","2","g"]],steps:["牛乳・卵、粉類、砂糖・塩・バター、最後にドライイーストを入れる。","メニュー13「スイート食パン」でスタートする。","焼き上がったら粗熱を取る。"]},
  "ベジタブルパン":{menuNo:"14",menuName:"ベジタブルパン",ingredients:[["水","100","g"],["強力粉","250","g"],["バター","20","g"],["砂糖","20","g"],["塩","4","g"],["スキムミルク","8","g"],["ドライイースト","2.5","g"],["かぼちゃ","70","g"],["にんじん","60","g"]],steps:["かぼちゃは加熱してつぶし、にんじんはすりおろす。","材料を公式順に入れる。","メニュー14「ベジタブルパン」でスタートし、焼き上がったら粗熱を取る。"]},
  "レーズン食パン":{menuNo:"1",menuName:"食パン",ingredients:[["水","180","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2.7","g"],["レーズン","50","g"]],steps:["基本の食パン材料を公式順に入れる。","メニュー1「食パン」でスタートする。","具材投入音でレーズンを入れる。","焼き上がったら粗熱を取る。"]},
  "甘栗とクルミのパン":{menuNo:"1",menuName:"食パン",ingredients:[["牛乳","170","g（卵と合わせて）"],["卵","50","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","20","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2.2","g"],["甘栗","70","g"],["クルミ","30","g"]],steps:["甘栗・クルミを食べやすい大きさにする。","生地材料を公式順に入れ、メニュー1でスタートする。","具材投入音で甘栗とクルミを入れる。","焼き上がったら粗熱を取る。"]},
  "じゃがいもとベーコンのパン":{menuNo:"14",menuName:"ベジタブルパン",ingredients:[["水","150","g"],["強力粉","230","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2.7","g"],["じゃがいも","1/2","個"],["ベーコン","40","g"],["フライドオニオン","30","g"],["黒こしょう","2","g"]],steps:["じゃがいもは加熱してつぶして冷まし、ベーコンは1cm幅に切る。","生地材料とじゃがいもを公式順に入れ、メニュー14でスタートする。","具材投入音でベーコン、フライドオニオン、黒こしょうを入れる。","焼き上がったら粗熱を取る。"]},
  "コーンパン":{menuNo:"14",menuName:"ベジタブルパン",ingredients:[["コーン缶の水＋不足分の水","180","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2.7","g"],["コーン","80","g"]],steps:["コーン缶の水分を含め液体を180gにする。","生地材料を公式順に入れ、メニュー14でスタートする。","具材投入音でコーンを入れる。","焼き上がったら粗熱を取る。"]},
  "ピザ風トマトパン":{menuNo:"14",menuName:"ベジタブルパン",ingredients:[["水","100","g"],["トマトジュース","80","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","3","g"],["スキムミルク","6","g"],["ドライイースト","2.7","g"],["サラミ","40","g"],["ドライトマト","20","g"],["チーズ","30","g"],["バジル","1","g"]],steps:["ドライトマトを戻して水気を切り、サラミ・チーズとともに1cm程度に切る。","生地材料を公式順に入れ、メニュー14でスタートする。","具材投入音で具材とバジルを入れる。","焼き上がったら粗熱を取る。"]},
  "えだまめチーズパン":{menuNo:"14",menuName:"ベジタブルパン",ingredients:[["水","150","g"],["強力粉","230","g"],["バター","18","g"],["砂糖","18","g"],["塩","4.5","g"],["スキムミルク","6","g"],["ドライイースト","2.2","g"],["枝豆（むき実）","50","g"],["チーズ","40","g"],["粉チーズ","6","g"]],steps:["枝豆の水分を拭き、チーズは1cm角に切る。","生地材料を公式順に入れ、メニュー14でスタートする。","具材投入音で枝豆・チーズ・粉チーズを入れる。","焼き上がったら粗熱を取る。"]},
  "スキムミルク不使用食パン":{menuNo:"1",menuName:"食パン",ingredients:[["水","80","g"],["牛乳","100","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["ドライイースト","2.7","g"]],steps:["材料を公式順に入れる。","メニュー1「食パン」でスタートする。","焼き上がったら粗熱を取る。"]},
  "豆乳パン":{menuNo:"1",menuName:"食パン",ingredients:[["水","80","g"],["豆乳","100","g"],["強力粉","250","g"],["砂糖","18","g"],["塩","4","g"],["ショートニング","18","g"],["ドライイースト","2.7","g"]],steps:["材料を公式順に入れる。","メニュー1「食パン」でスタートする。","焼き上がったら粗熱を取る。"]},
  "アーモンドミルクパン":{menuNo:"1",menuName:"食パン",ingredients:[["アーモンドミルク","180","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["ドライイースト","2.7","g"]],steps:["材料を公式順に入れる。","メニュー1「食パン」でスタートする。","焼き上がったら粗熱を取る。"]},
  "オリーブオイルパン":{menuNo:"1",menuName:"食パン",ingredients:[["水","180","g"],["強力粉","250","g"],["オリーブオイル","10","g"],["砂糖","18","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2.7","g"]],steps:["材料を公式順に入れる。","メニュー1「食パン」でスタートする。","焼き上がったら粗熱を取る。"]},
  "ドライフルーツと全粒粉の食パン":{menuNo:"7",menuName:"全粒粉パン",ingredients:[["水","190","mL"],["強力粉","130","g"],["全粒粉","130","g"],["バター","17","g"],["砂糖","17","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2","g"],["ドライフルーツ","50","g"]],steps:["生地材料を公式順に入れ、メニュー7でスタートする。","具材投入音でドライフルーツを入れる。","焼き上がったら粗熱を取る。"]},
  "いちじくとクルミのライ麦パン":{menuNo:"11",menuName:"ライ麦パン",ingredients:[["水","170","mL"],["強力粉","220","g"],["ライ麦粉","30","g"],["バター","12","g"],["砂糖","17","g"],["塩","4","g"],["スキムミルク","4","g"],["ドライイースト","2","g"],["ドライいちじく","50","g"],["クルミ","20","g"]],steps:["いちじくとクルミを粗く刻む。","生地材料を公式順に入れ、メニュー11でスタートする。","具材投入音でいちじくとクルミを入れる。","焼き上がったら粗熱を取る。"]},
  "バタースコッチ風パン":{menuNo:"12",menuName:"デニッシュ風食パン",ingredients:[["牛乳","150","mL（卵と合わせて）"],["卵","25","g"],["強力粉","200","g"],["薄力粉","50","g"],["バター","70","g"],["砂糖","30","g"],["塩","4","g"],["練乳","10","g"],["ドライイースト","2","g"]],steps:["液体、練乳、粉類、砂糖・塩・バター、最後にドライイーストを入れる。","メニュー12「デニッシュ風食パン」でスタートする。","焼き上がったら粗熱を取る。"]},
  "ほうじ茶黒豆パン":{menuNo:"1",menuName:"食パン",ingredients:[["ほうじ茶","150","mL"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["ドライイースト","2.7","g"],["黒豆（煮豆）","100","g"]],steps:["黒豆の水気をしっかり拭く。","生地材料を公式順に入れ、メニュー1でスタートする。","具材投入音で黒豆を入れる。","焼き上がったら粗熱を取る。"]},
  "さつまいものパン":{menuNo:"4",menuName:"早焼きパン",ingredients:[["水","100","mL"],["牛乳","70","g"],["強力粉","200","g"],["薄力粉","50","g"],["バター","8","g"],["砂糖","25","g"],["塩","4","g"],["ドライイースト","2.7","g"],["さつまいも（生または甘露煮）","70","g"],["黒ごま","18","g"]],steps:["さつまいもを1cm角に切る。","生地材料を公式順に入れ、メニュー4でスタートする。","具材投入音でさつまいもと黒ごまを入れる。","焼き上がったら粗熱を取る。"]},
  "ケーキ":{menuNo:"20",menuName:"ケーキ",ingredients:[["牛乳","20","g"],["卵","100","g"],["薄力粉","180","g"],["ベーキングパウダー","8","g"],["バター","110","g"],["砂糖","90","g"],["バニラエッセンス","少々",""]],steps:["バターを1cm角に切って常温に戻し、薄力粉とベーキングパウダーを合わせてふるう。","牛乳、卵、粉類、砂糖、バター、バニラエッセンスの順に入れる。","メニュー20「ケーキ」でスタートする。","粉落とし音でケース内側の粉を落とし、完成後は粗熱を取って取り出す。"]},
  "BLTサンド":{menuNo:"5",menuName:"サンドイッチ用食パン",ingredients:[["サンドイッチ用食パン","2","枚"],["ベーコン","2","枚"],["レタス","30","g"],["トマト","1/4","個"],["黒こしょう","少々",""],["マヨネーズ","大さじ1",""],["粒マスタード","小さじ2",""]],steps:["トマトとレタスを食べやすく準備し、ベーコンを焼く。","マヨネーズと粒マスタードを混ぜてパンに塗る。","レタス、トマト、ベーコンを挟む。"]}
};

function officialUrlFor(name){
  const q=officialSourceMap[name];
  return q ? OFFICIAL_BASE + q : "https://www.irisohyama.co.jp/home-bakery/compact-type/recipe/";
}

const menuCatalog = [
[1,"食パン"],[2,"ハーフ食パン"],[3,"ふんわり食パン"],[4,"早焼きパン"],[5,"サンドイッチ用食パン"],
[6,"フランスパン"],[7,"全粒粉パン"],[8,"米粉パン（小麦入り）"],[9,"米粉パン（グルテンフリー）"],[10,"ごはんパン"],
[11,"ライ麦パン"],[12,"デニッシュ風食パン"],[13,"スイート食パン"],[14,"ベジタブルパン"],[15,"パン生地"],
[16,"ふんわりパン生地"],[17,"ピザ生地"],[18,"うどん・パスタ生地"],[19,"そば生地"],[20,"ケーキ"],
[21,"ジャム"],[22,"あん"],[23,"甘酒"],[24,"もち"],[25,"こねる"],[26,"発酵"],[27,"焼き"]
];


function nowIso(){ return new Date().toISOString(); }
function safeIso(v){
  if(!v) return "";
  const d=new Date(v);
  return Number.isNaN(d.getTime()) ? String(v) : d.toISOString();
}
function evalScore(r){
  return (r?.rating ? 8 : 0) +
         (r?.comment ? 4 : 0) +
         (r?.next ? 2 : 0) +
         (r?.photo ? 1 : 0) +
         (r?.status==="completed" ? 1 : 0);
}
function normalizeRecordForMerge(r){
  const x={...(r||{})};
  const hasEval=!!(x.rating || x.comment || x.next || x.photo);
  // Any evaluated record must have a real update timestamp.
  if(hasEval && !x.updatedAt) x.updatedAt=x.completedAt || x.date || "";
  if(!hasEval && x.updatedAt && safeIso(x.updatedAt) > safeIso(new Date().toISOString())){
    x.updatedAt=x.completedAt || x.date || "";
  }
  return x;
}

function touchRecord(rec){ if(rec) rec.updatedAt=nowIso(); }
function recordUpdatedAt(rec){
  return rec?.updatedAt || rec?.completedAt || rec?.date || "";
}
function uid(prefix="id"){ return prefix+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,8); }

function defaultData(){
  const recipes = [
    {
      id:"r_bread", item:"標準パン", name:"IBM-010-C 標準食パン", version:"標準", type:"official", favorite:true,
      menuNo:"1", menuName:"食パン", rating:"",
      ingredients:[
        ["水","180","g"],["強力粉","250","g"],["バター","18","g"],["砂糖","18","g"],["塩","4","g"],["スキムミルク","6","g"],["ドライイースト","2.7","g"]
      ],
      steps:[
        "パン焼きケースにパン羽根を取り付け、材料を公式レシピの順序で入れる。",
        "本体にセットして「メニュー1 食パン」を選び、スタートする。",
        "焼き上がったらパンを取り出し、粗熱を取る。"
      ],
      notes:"公式レシピ。詳細は公式レシピサイトで確認。", officialUrl:"https://www.irisohyama.co.jp/home-bakery/compact-type/recipe/detail/?c=1&r=1&s=1"
    },
    {
      id:"r_edamame", item:"枝豆チーズパン", name:"えだまめチーズパン", version:"標準", type:"official", favorite:true,
      menuNo:"14", menuName:"ベジタブルパン", rating:"",
      ingredients:[
        ["水","150","g"],["強力粉","230","g"],["バター","18","g"],["砂糖","18","g"],["塩","4.5","g"],["スキムミルク","6","g"],["ドライイースト","2.2","g"],
        ["枝豆（むき実）","50","g"],["チーズ","40","g"],["粉チーズ","6","g"]
      ],
      steps:[
        "枝豆は水分をしっかり拭き取り、チーズは1cm角に切る。",
        "パン焼きケースに材料を公式レシピの順序で入れる。",
        "「メニュー14 ベジタブルパン」を選びスタートする。",
        "具材投入のお知らせ音が鳴ったら、枝豆・チーズ・粉チーズを入れる。",
        "焼き上がったらパンを取り出し、粗熱を取る。"
      ],
      notes:"公式レシピ。", officialUrl:"https://www.irisohyama.co.jp/home-bakery/compact-type/recipe/detail/?c=2&r=20&s=1"
    },
    
    
    {
      id:"r_cake", item:"ケーキ", name:"基本のケーキ", version:"標準", type:"official", favorite:false,
      menuNo:"20", menuName:"ケーキ", rating:"",
      ingredients:[["牛乳","20","g"],["卵","100","g"],["薄力粉","180","g"],["ベーキングパウダー","8","g"],["バター","110","g"],["砂糖","90","g"],["バニラエッセンス","少々",""]],
      steps:["バターを常温に戻し、薄力粉とベーキングパウダーを合わせてふるう。","材料を公式レシピの順序で入れる。","「メニュー20 ケーキ」でスタートする。","粉落とし音が鳴ったら内側の粉を落とす。","でき上がったら粗熱を取り、静かに振って取り出す。"],
      notes:"バナナケーキ等のベースに使える公式レシピ。", officialUrl:"https://www.irisohyama.co.jp/home-bakery/compact-type/recipe/detail/?c=6&r=44&s=1"
    },
    ];

  // 公式60選＋標準メニューを全件保持。確認済みのレシピは材料・手順まで内蔵する。
  officialRecipeCatalog.forEach(([cat,name],i)=>{
    let r=recipes.find(r=>r.name===name);
    if(!r){
      r={id:"catalog_"+i,item:name,name,version:"公式",type:cat==="WEB限定"?"web":"official",favorite:false,rating:"",menuNo:"",menuName:"",ingredients:[],steps:[],notes:`公式レシピ「${cat}」`,officialUrl:officialUrlFor(name)};
      recipes.push(r);
    }
    r.officialUrl=officialUrlFor(name);
    r.sourceVerified=true;
    r.sourceCategory=cat;
    if(verifiedDetails[name]){
      Object.assign(r, verifiedDetails[name]);
      r.notes=(r.notes?r.notes+" ":"")+"アイリスオーヤマ公式Web確認済み。";
    }
  });

  const records=[];
  return {
    version:4,
    machine:{manufacturer:"アイリスオーヤマ",model:"IBM-010-C",color:"サンドベージュ",purchaseDate:"2026-09-07"},
    recipes,records
  };
}

let data = load();
function load(){
  try{
    // v0.6 data first. If absent, migrate the latest previous data once.
    let raw=localStorage.getItem(STORAGE_KEY);
    if(!raw){
      for(const v of [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]){
        const candidate=localStorage.getItem(`breadLogIBM010C_v${v}`);
        if(candidate){ raw=candidate; break; }
      }
    }
    if(!raw){
      const initial=defaultData();
      localStorage.setItem(STORAGE_KEY,JSON.stringify(initial));
      return initial;
    }

    const existing=JSON.parse(raw);
    const schemaRepaired=repairRecipeSchema(existing);

    const fresh=defaultData();

    existing.recipes=existing.recipes||[];
    existing.records=existing.records||[];
    existing.machine=existing.machine||fresh.machine;

    // Only refresh/append official recipes.
    // Deleted custom / variant recipes must NEVER be re-created automatically.
    fresh.recipes
      .filter(fr=>fr.type==="official" || fr.type==="web")
      .forEach(fr=>{
        const ix=existing.recipes.findIndex(er=>er.id===fr.id || (er.name===fr.name && (er.type==="official"||er.type==="web")));
        if(ix>=0){
          const keepFav=existing.recipes[ix].favorite;
          existing.recipes[ix]={...existing.recipes[ix],...fr,favorite:keepFav};
        }else{
          existing.recipes.push(fr);
        }
      });

    // Migrate old history into snapshot format.
    
    existing.recipes.forEach(r=>{
      if(r.version==="Ver.1（9/20実作）"){
        r.version="Ver.1";
        if(!r.versionNote) r.versionNote="";
      }
      if(r.version==="Ver.2（検討案）"){
        r.version="Ver.2";
        if(!r.versionNote) r.versionNote="";
      }
    });
existing.records=existing.records.map(rec=>{
      if(!rec.workingRecipe){
        const src=existing.recipes.find(r=>r.id===rec.recipeId);
        if(src){
          rec.workingRecipe={
            name:src.name||"",
            item:src.item||"",
            menuNo:src.menuNo||"",
            menuName:src.menuName||"",
            ingredients:JSON.parse(JSON.stringify(src.ingredients||[])),
            steps:[...(src.steps||[])],
            notes:""
          };
        }
      }
      if(!rec.status) rec.status="completed";

      // v0.25 bug repair:
      // unevaluated legacy records were incorrectly stamped as "now" on every launch.
      // That made stale PC records look newer than evaluated phone records.
      const hasEvaluation = !!(rec.rating || rec.comment || rec.next || rec.photo);
      if(!hasEvaluation){
        rec.updatedAt = rec.completedAt || rec.date || "";
      }else if(!rec.updatedAt){
        rec.updatedAt = rec.completedAt || rec.date || "";
      }
      return rec;
    });

    existing.version=33;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(existing));
    if(schemaRepaired){
      try{ localStorage.setItem(STORAGE_KEY,JSON.stringify(existing)); }catch(e){}
    }
    return existing;
  }catch(e){
    console.error("load failed",e);
    const initial=defaultData();
    try{ localStorage.setItem(STORAGE_KEY,JSON.stringify(initial)); }catch(_){}
    return initial;
  }
}
function save(){
  if(Array.isArray(data?.records)){
    data.records.forEach(r=>{
      if(!r.updatedAt) r.updatedAt = r.completedAt || r.date || "";
    });
  }
 localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
  if(typeof queueDriveSave==="function") queueDriveSave(); renderAll(); }
function esc(s){ return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m])); }
function recipeById(id){ return data.recipes.find(r=>r.id===id); }
function stars(n){ return n? "★★★★★".slice(0,+n)+"☆☆☆☆☆".slice(0,5-(+n)) : "未評価"; }


function heartIcon(filled){
  return `<svg class="heart-svg ${filled?"filled":""}" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 20.4 4.6 13A5.2 5.2 0 0 1 12 5.7 5.2 5.2 0 0 1 19.4 13L12 20.4Z"></path>
  </svg>`;
}
function latestRecipeForItem(item){
  const recipes=data.recipes.filter(r=>(r.item||r.name)===item);
  const versioned=recipes.filter(r=>r.type==="custom"||r.type==="variant");
  if(versioned.length){
    return [...versioned].sort((a,b)=>{
      const av=+(String(a.version||"").match(/Ver\.(\d+)/)?.[1]||0);
      const bv=+(String(b.version||"").match(/Ver\.(\d+)/)?.[1]||0);
      if(bv!==av) return bv-av;
      const al=data.records.filter(x=>x.recipeId===a.id).map(x=>x.date||"").sort().reverse()[0]||"";
      const bl=data.records.filter(x=>x.recipeId===b.id).map(x=>x.date||"").sort().reverse()[0]||"";
      return bl.localeCompare(al);
    })[0];
  }
  return recipes.find(r=>r.type==="official"||r.type==="web") || recipes[0] || null;
}
function recipeRatingStats(recipeId){
  const vals=data.records
    .filter(x=>x.recipeId===recipeId && Number(x.rating)>0)
    .map(x=>Number(x.rating));
  if(!vals.length) return {avg:0,count:0};
  return {avg:vals.reduce((a,b)=>a+b,0)/vals.length,count:vals.length};
}
function itemRatingStats(item){
  const vals=data.records
    .filter(x=>{
      const r=recipeById(x.recipeId);
      return (x.workingRecipe?.item||r?.item)===item && Number(x.rating)>0;
    })
    .map(x=>Number(x.rating));
  if(!vals.length) return {avg:0,count:0};
  return {avg:vals.reduce((a,b)=>a+b,0)/vals.length,count:vals.length};
}
function ratingLabel(stats){
  return stats.count ? `★${stats.avg.toFixed(1)} (${stats.count}件)` : "未評価";
}
function isItemFavorite(item){
  return data.recipes.filter(r=>(r.item||r.name)===item).some(r=>r.favorite);
}
window.toggleItemFavorite=function(itemEncoded,event){
  if(event){ event.stopPropagation(); event.preventDefault(); }
  const item=decodeURIComponent(itemEncoded);
  const next=!isItemFavorite(item);
  data.recipes.forEach(r=>{
    if((r.item||r.name)===item) r.favorite=next;
  });
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
  renderAll();
  toast(next?"お気に入りに追加しました":"お気に入りを外しました");
};
window.toggleRecipeFavorite=function(id,event){
  if(event){ event.stopPropagation(); event.preventDefault(); }
  const r=recipeById(id); if(!r)return;
  r.favorite=!r.favorite;
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
  renderAll();
  const dlg=document.getElementById("detailDialog");
  if(dlg?.open){
    dlg.close();
    showRecipe(id);
  }
  toast(r.favorite?"お気に入りに追加しました":"お気に入りを外しました");
};
function typeLabel(t){ return ({official:"公式",web:"Web公式",custom:"自作",variant:"改良版"})[t]||t; }

const doughRecipeNames = new Set([
  "パン生地","ふんわりパン生地","ピザ生地","うどん・パスタ生地","そば生地",
  "バターロール","クロワッサン","メロンパン","あんぱん","卵不使用ちぎりパン",
  "米粉のベーコンエピ","米粉の黒ごまスティックパン","手ごね動物パン","くまさんちぎりパン",
  "おたのしみちぎりパン","チョコチップスティックパン","4種の手作りピザ","白パン",
  "フォカッチャ","シナモンロール","ねじりドーナツ","チョコパン"
]);
const otherRecipeNames = new Set([
  "BLTサンド","フルーツたっぷりサンドイッチ","ケーキ","いちごジャム","ブルーベリージャム",
  "あん","うどん（肉うどん）","そば（とりの南蛮風つけそば）","パスタ（カルボナーラ）","甘酒","もち"
]);
function recipeClass(r){
  if(r.recipeClass) return r.recipeClass;
  const n=Number(r.menuNo);
  if(n>=1 && n<=14) return "bread";
  if(n>=15 && n<=19) return "dough";
  if(n>=20 && n<=27) return "other";
  if(doughRecipeNames.has(r.name) || doughRecipeNames.has(r.item)) return "dough";
  if(otherRecipeNames.has(r.name) || otherRecipeNames.has(r.item)) return "other";
  return "bread";
}
function recipeClassLabel(c){ return ({bread:"パン",dough:"生地",other:"その他"})[c]||"その他"; }

function nav(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.dataset.page===page));
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.nav===page));
  window.scrollTo({top:0,behavior:"smooth"});
}
document.addEventListener("click",e=>{
  const n=e.target.closest("[data-nav]"); if(n) nav(n.dataset.nav);
});

function renderHome(){
  const completed=data.records.filter(r=>r.status!=="in_progress");
  const inProgress=data.records.filter(r=>r.status==="in_progress");

  document.getElementById("totalCount").textContent=completed.length;
  document.getElementById("inProgressCount").textContent=inProgress.length;

  const counts={};
  completed.forEach(rec=>{
    const r=recipeById(rec.recipeId);
    const item=rec.workingRecipe?.item||r?.item||"不明";
    counts[item]=(counts[item]||0)+1;
  });

  const bd=document.getElementById("breakdown");
  bd.innerHTML='<h3>完了分の品目別内訳</h3>'
    +(Object.keys(counts).length
      ? Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<div class="ingredient-row"><span>${esc(k)}</span><strong>${v}回</strong></div>`).join("")
      : '<div class="muted">完了した作成記録はまだありません。</div>');

  const recent=[...data.records].sort((a,b)=>(b.date||"").localeCompare(a.date||"")).slice(0,3);
  document.getElementById("recentList").innerHTML=recent.length?recent.map(historyHtml).join(""):'<div class="card muted">まだ記録がありません。</div>';

  const fav=data.recipes.filter(r=>r.favorite).slice(0,8);
  document.getElementById("favoriteList").innerHTML=fav.map(r=>`<button class="chip" onclick="showRecipe('${r.id}')">★ ${esc(r.name)} ${esc(r.version||"")}</button>`).join("") || '<span class="muted">お気に入りはありません。</span>';
}
function historyHtml(rec){
  const source=recipeById(rec.recipeId)||{};
  const r=rec.workingRecipe||source||{name:"削除済み",item:"不明",version:""};
  const status=rec.status==="in_progress"?"作成中":"完了";
  return `<div class="item history-item" onclick="showRecord('${rec.id}')">
    ${rec.photo?`<img class="photo-thumb" src="${rec.photo}">`:`<div class="photo-thumb" style="display:grid;place-items:center;font-size:28px">🍞</div>`}
    <div class="item-main" style="flex:1">
      <div class="item-title">${esc(r.item||source.item||"不明")} <span class="badge">${status}</span></div>
      <div class="item-sub">${esc(rec.date||"日付未設定")} ・ ${esc(r.name||source.name||"")} ${esc(source.version||"")}</div>
      <div class="stars">${stars(rec.rating)}</div>
      ${rec.comment?`<div class="item-sub">${esc(rec.comment).slice(0,80)}</div>`:""}
    </div><div>›</div>
  </div>`;
}
function renderHistory(){
  const list=[...data.records].sort((a,b)=>(b.date||"").localeCompare(a.date||""));
  document.getElementById("historyList").innerHTML=list.length?list.map(historyHtml).join(""):'<div class="card muted">履歴はまだありません。</div>';
}
function renderRecipes(){
  const q=document.getElementById("recipeSearch")?.value?.trim().toLowerCase()||"";
  const type=document.getElementById("recipeTypeFilter")?.value||"";
  const favOnly=document.getElementById("favoritesOnly")?.checked||false;
  const classFilter=document.getElementById("recipeClassFilter")?.value||"";

  const filtered=data.recipes.filter(r=>{
    const hay=[r.name,r.item,r.version,r.menuName,(r.ingredients||[]).flat().join(" ")].join(" ").toLowerCase();
    const classOk=!classFilter || recipeClass(r)===classFilter;
    return (!q||hay.includes(q))&&(!type||r.type===type)&&(!favOnly||r.favorite)&&classOk;
  });

  const groups={};
  filtered.forEach(r=>{
    const key=r.item||r.name;
    if(!groups[key]) groups[key]=[];
    groups[key].push(r);
  });

  const rows=Object.entries(groups).map(([item,recipes])=>{
    const ids=new Set(recipes.map(r=>r.id));
    const records=data.records.filter(x=>ids.has(x.recipeId) || x.workingRecipe?.item===item);
    const last=records.length?records.map(x=>x.date||"").sort().reverse()[0]:"";
    const count=records.length;
    const favorite=recipes.some(r=>r.favorite);
    const latest=recipes.filter(r=>r.type==="custom"||r.type==="variant").sort((a,b)=>{
      const av=+(String(a.version||"").match(/Ver\.(\d+)/)?.[1]||0);
      const bv=+(String(b.version||"").match(/Ver\.(\d+)/)?.[1]||0);
      return bv-av;
    })[0];
    return {item,recipes,records,last,count,favorite,latest};
  });

  rows.sort((a,b)=>{
    if((b.count>0)!=(a.count>0)) return (b.count>0)-(a.count>0);
    if(b.last!==a.last) return b.last.localeCompare(a.last);
    return a.item.localeCompare(b.item,"ja");
  });

  document.getElementById("recipeList").innerHTML=rows.map(g=>{
    const latestLabel=g.latest?(g.latest.version||"最新版"):"";
    const latestRecipe=latestRecipeForItem(g.item);
    const rs=latestRecipe?recipeRatingStats(latestRecipe.id):{avg:0,count:0};
    const fav=isItemFavorite(g.item);
    return `<div class="item" onclick="showRecipeGroup('${encodeURIComponent(g.item)}')">
      <button class="heart-btn" onclick="toggleItemFavorite('${encodeURIComponent(g.item)}',event)" aria-label="お気に入り">${heartIcon(fav)}</button>
      <div class="item-main" style="flex:1">
        <div class="item-title">${esc(g.item)}</div>
        <div class="item-sub">${g.count?`${g.count}回作成 ・ 最終 ${esc(g.last)}`:"未作成"}${latestLabel?` ・ 最新 ${esc(latestLabel)}`:""}</div>
        <div class="badges"><span class="badge">${g.recipes.length}レシピ</span>${g.count?`<span class="badge">作成実績あり</span>`:""}<span class="badge">最新Ver評価 ${ratingLabel(rs)}</span></div>
      </div><div>›</div>
    </div>`;
  }).join("") || '<div class="card muted">該当するレシピはありません。</div>';
}
function renderBakeSelect(){
  const list=[...data.recipes].sort((a,b)=>{
    const itemA=a.item||a.name, itemB=b.item||b.name;

    const itemARecords=data.records.filter(x=>{
      const r=recipeById(x.recipeId);
      return (x.workingRecipe?.item||r?.item)===itemA;
    });
    const itemBRecords=data.records.filter(x=>{
      const r=recipeById(x.recipeId);
      return (x.workingRecipe?.item||r?.item)===itemB;
    });

    const aLast=itemARecords.length?itemARecords.map(x=>x.date).sort().reverse()[0]:"";
    const bLast=itemBRecords.length?itemBRecords.map(x=>x.date).sort().reverse()[0]:"";

    if((itemBRecords.length>0)!=(itemARecords.length>0)) return (itemBRecords.length>0)-(itemARecords.length>0);
    if(bLast!==aLast) return bLast.localeCompare(aLast);
    if(itemA!==itemB) return itemA.localeCompare(itemB,"ja");

    const aOfficial=(a.type==="official"||a.type==="web");
    const bOfficial=(b.type==="official"||b.type==="web");
    if(aOfficial!==bOfficial) return aOfficial?1:-1;

    const av=+(String(a.version||"").match(/Ver\.(\d+)/)?.[1]||0);
    const bv=+(String(b.version||"").match(/Ver\.(\d+)/)?.[1]||0);
    return bv-av;
  });

  document.getElementById("bakeRecipeSelect").innerHTML=list.map(r=>{
    const tag=(r.type==="official"||r.type==="web")?"標準":`${r.version||"自作"}${r.versionNote?` ・ ${r.versionNote}`:""}`;
    return `<option value="${r.id}">${esc(r.item)}｜${esc(tag)}｜${esc(r.name)}</option>`;
  }).join("");
}
function renderMenu(){
  document.getElementById("menuCatalog").innerHTML=menuCatalog.map(([n,name])=>`<div class="menu"><b>${n}</b>${esc(name)}</div>`).join("");
}
function renderAll(){ renderHome(); renderRecipes(); renderBakeSelect(); renderHistory(); renderMenu(); }


window.showRecipeGroup=function(encodedItem){
  const item=decodeURIComponent(encodedItem);
  const recipes=data.recipes.filter(r=>(r.item||r.name)===item);

  const sorted=[...recipes].sort((a,b)=>{
    const aOfficial=(a.type==="official"||a.type==="web");
    const bOfficial=(b.type==="official"||b.type==="web");
    if(aOfficial!==bOfficial) return aOfficial?1:-1;

    const av=+(String(a.version||"").match(/Ver\.(\d+)/)?.[1]||0);
    const bv=+(String(b.version||"").match(/Ver\.(\d+)/)?.[1]||0);
    if(bv!==av) return bv-av;

    const ar=data.records.filter(x=>x.recipeId===a.id);
    const br=data.records.filter(x=>x.recipeId===b.id);
    const al=ar.length?ar.map(x=>x.date).sort().reverse()[0]:"";
    const bl=br.length?br.map(x=>x.date).sort().reverse()[0]:"";
    if(bl!==al) return bl.localeCompare(al);
    return a.name.localeCompare(b.name,"ja");
  });

  const itemRecords=data.records.filter(x=>{
    const r=recipeById(x.recipeId);
    return (x.workingRecipe?.item||r?.item)===item;
  });
  const last=itemRecords.length?itemRecords.map(x=>x.date).sort().reverse()[0]:"";

  const d=document.getElementById("detailContent");
  d.innerHTML=`
    <div class="dialog-head">
      <div>
        <div class="eyebrow">レシピグループ</div>
        <h2>${esc(item)}</h2>
        <div class="muted">${itemRecords.length?`${itemRecords.length}回作成 ・ 最終 ${esc(last)}`:"未作成"}</div>
      </div>
      <button class="icon-btn" onclick="detailDialog.close()">✕</button>
    </div>
    <div class="detail-section">
      ${sorted.map(r=>{
        const rows=data.records.filter(x=>x.recipeId===r.id);
        const rLast=rows.length?rows.map(x=>x.date).sort().reverse()[0]:"";
        const label=(r.type==="official"||r.type==="web")?"標準 / 公式":`${r.version||"自作"}${r.versionNote?` ・ ${r.versionNote}`:""}`;
        const rs=recipeRatingStats(r.id);
        return `<div class="item" style="margin-bottom:10px" onclick="showRecipe('${r.id}')">
          <button class="heart-btn" onclick="toggleRecipeFavorite('${r.id}',event)" aria-label="お気に入り">${heartIcon(r.favorite)}</button>
          <div class="item-main" style="flex:1">
            <div class="item-title">${esc(label)}</div>
            <div class="item-sub">${esc(r.name)}${r.menuNo?` ・ メニュー${esc(r.menuNo)} ${esc(r.menuName||"")}`:""}</div>
            <div class="badges">
              <span class="badge ${r.type}">${typeLabel(r.type)}</span>
              ${rows.length?`<span class="badge">${rows.length}回作成</span><span class="badge">最終 ${esc(rLast)}</span>`:"<span class='badge'>未作成</span>"}
              <span class="badge">${ratingLabel(rs)}</span>
            </div>
          </div>
          <div>›</div>
        </div>`;
      }).join("")}
    </div>`;
  document.getElementById("detailDialog").showModal();
};

window.showRecipe=function(id){
  const r=recipeById(id); if(!r)return;
  const count=data.records.filter(x=>x.recipeId===id).length;
  const itemCount=data.records.filter(x=>recipeById(x.recipeId)?.item===r.item).length;
  const ing=(r.ingredients||[]).length?r.ingredients.map(x=>`<div class="ingredient-row"><span>${esc(x[0])}</span><strong>${esc(x[1])}${esc(x[2]||"")}</strong></div>`).join(""):'<p class="muted">詳細材料は未登録です。公式サイトで確認してください。</p>';
  const steps=(r.steps||[]).length?r.steps.map((s,i)=>`<div class="step"><div class="step-num">${i+1}</div><div>${esc(s)}</div></div>`).join(""):'<p class="muted">手順は未登録です。公式サイトで確認してください。</p>';
  const standard=getStandardAncestor(r);
  const previous=getPreviousVersion(r);
  const diffStd=computeDiffLines(r.ingredients||[],r.steps||[],standard,"標準から","red");
  const diffPrev=computeDiffLines(r.ingredients||[],r.steps||[],previous,"前バージョンから","blue");
  const d=document.getElementById("detailContent");
  d.innerHTML=`
    <div class="dialog-head"><div><div class="eyebrow">${typeLabel(r.type)} / ${esc(r.item)}</div><h2>${esc(r.name)}</h2><div class="muted">${esc(r.version||"")}${r.versionNote?` ・ ${esc(r.versionNote)}`:""}</div></div><div style="display:flex;align-items:center;gap:6px"><button class="heart-btn large" onclick="toggleRecipeFavorite('${r.id}',event)" aria-label="お気に入り">${heartIcon(r.favorite)}</button><button class="icon-btn" onclick="detailDialog.close()">✕</button></div></div>
    <div class="badges"><span class="badge">${recipeClassLabel(recipeClass(r))}</span><span class="badge">${count}回作成</span><span class="badge">品目合計 ${itemCount}回</span><span class="badge">${ratingLabel(recipeRatingStats(r.id))}</span>${r.menuNo?`<span class="badge">メニュー${esc(r.menuNo)} ${esc(r.menuName)}</span>`:""}</div>
    <div class="detail-section"><h3>材料</h3>${ing}</div>
    <div class="detail-section"><h3>作り方</h3>${steps}</div>
    ${(diffStd&&diffStd.length)?`<div class="detail-section"><h3 class="change-red">標準レシピからの変更</h3>${diffStd.map(x=>`<div class="diff-row red"><strong>${esc(x.title)}</strong>${esc(x.text)}</div>`).join("")}</div>`:""}
    ${(diffPrev&&diffPrev.length)?`<div class="detail-section"><h3 class="change-blue">前バージョンからの変更</h3>${diffPrev.map(x=>`<div class="diff-row blue"><strong>${esc(x.title)}</strong>${esc(x.text)}</div>`).join("")}</div>`:""}
    ${r.notes?`<div class="detail-section"><h3>メモ</h3><p>${esc(r.notes)}</p></div>`:""}
    ${r.officialUrl?`<a class="secondary full center" href="${r.officialUrl}" target="_blank" rel="noopener">公式レシピを開く</a>`:""}
    <div class="detail-actions detail-section">
      <button class="primary" onclick="startRecipeDirect('${r.id}')">このレシピで作る</button>
      <button class="secondary" onclick="editAndStartRecipe('${r.id}')">編集して作成</button>
      <button class="secondary" onclick="copyRecipeForChat('${r.id}')">ChatGPT用コピー</button>
      ${(r.type!=="official"&&r.type!=="web")?`<button class="secondary" onclick="editRecipeMeta('${r.id}')">レシピ情報を編集</button>`:""}
      ${(r.type!=="official"&&r.type!=="web")?`<button class="danger" onclick="deleteRecipe('${r.id}')">このレシピを削除</button>`:""}
    </div>`;
  document.getElementById("detailDialog").showModal();
}

window.showRecord=function(id){
  const rec=data.records.find(x=>x.id===id); if(!rec)return;
  const source=recipeById(rec.recipeId)||{};
  const wr=rec.workingRecipe||{
    name:source.name||"",item:source.item||"",menuNo:source.menuNo||"",menuName:source.menuName||"",
    ingredients:source.ingredients||[],steps:source.steps||[],notes:""
  };
  const d=document.getElementById("detailContent");
  const ing=(wr.ingredients||[]).map(x=>`<div class="ingredient-row"><span>${esc(x[0])}</span><strong>${esc(x[1])}${esc(x[2]||"")}</strong></div>`).join("")||'<p class="muted">材料未登録</p>';
  const steps=(wr.steps||[]).map((s,i)=>`<div class="step"><div class="step-num">${i+1}</div><div>${esc(s)}</div></div>`).join("")||'<p class="muted">手順未登録</p>';
  d.innerHTML=`<div class="dialog-head"><div><div class="eyebrow">作成履歴 / ${rec.status==="in_progress"?"作成中":"完了"}</div><h2>${esc(wr.item||source.item||"記録")}</h2></div><button class="icon-btn" onclick="detailDialog.close()">✕</button></div>
    ${rec.photo?`<img src="${rec.photo}" style="width:100%;border-radius:16px;max-height:320px;object-fit:cover;margin-top:12px">`:""}
    <div class="detail-section"><div class="ingredient-row"><span>日付</span><strong>${esc(rec.date||"日付未設定")}</strong></div>
    <div class="ingredient-row"><span>テンプレート</span><strong>${esc(source.name||"")} ${esc(source.version||"")}</strong></div>
    <div class="ingredient-row"><span>今回の名前</span><strong>${esc(wr.name||"")}</strong></div>
    <div class="ingredient-row"><span>メニュー</span><strong>${esc(wr.menuNo||"-")} ${esc(wr.menuName||"")}</strong></div>
    <div class="ingredient-row"><span>評価</span><strong>${stars(rec.rating)}</strong></div></div>
    <div class="detail-section"><h3>今回使った材料</h3>${ing}</div>
    <div class="detail-section"><h3>今回の手順</h3>${steps}</div>
    ${(rec.diffStandard&&rec.diffStandard.length)?`<div class="detail-section"><h3 class="change-red">標準レシピからの変更</h3>${rec.diffStandard.map(x=>`<div class="diff-row red"><strong>${esc(x.title)}</strong>${esc(x.text)}</div>`).join("")}</div>`:""}
    ${(rec.diffPrevious&&rec.diffPrevious.length)?`<div class="detail-section"><h3 class="change-blue">前バージョンからの変更</h3>${rec.diffPrevious.map(x=>`<div class="diff-row blue"><strong>${esc(x.title)}</strong>${esc(x.text)}</div>`).join("")}</div>`:""}
    ${wr.notes?`<div class="detail-section"><h3>作成前メモ</h3><p>${esc(wr.notes)}</p></div>`:""}
    <div class="detail-section"><h3>感想</h3><p>${esc(rec.comment||"未入力")}</p></div>
    <div class="detail-section"><h3>次回改善</h3><p>${esc(rec.next||"未入力")}</p></div>
    <button class="primary full" onclick="openBakeEvaluation('${rec.id}')">${rec.status==="in_progress"?"完成後の評価を入力":"評価・写真を編集"}</button>
    <button class="secondary full" onclick="saveWorkingRecipeAsVariant('${rec.id}')">今回の内容を新しいレシピとして保存</button>
    <button class="secondary full" onclick="copyRecordForChat('${rec.id}')">ChatGPT相談用にコピー</button>
    <button class="danger full" onclick="deleteRecord('${rec.id}')">この作成記録を削除</button>`;
  document.getElementById("detailDialog").showModal();
}

function openRecipeForm(recipe=null,copy=false){
  const r=recipe||{};
  document.getElementById("recipeDialogTitle").textContent=copy?"改良版を作る":(recipe?"レシピ編集":"新規レシピ");
  document.getElementById("recipeId").value=copy?"":(r.id||"");
  document.getElementById("recipeName").value=r.name||"";
  document.getElementById("recipeItem").value=r.item||"";
  document.getElementById("recipeVersion").value=copy?nextVersion(r.item):r.version||"";
  document.getElementById("recipeVersionNote").value=copy?"":(r.versionNote||"");
  document.getElementById("recipeType").value=copy?"variant":(r.type||"custom");
  document.getElementById("recipeMenuNo").value=r.menuNo||"";
  document.getElementById("recipeMenuName").value=r.menuName||"";
  document.getElementById("recipeIngredients").value=(r.ingredients||[]).map(x=>x.join(" | ")).join("\n");
  renderIngredientEditor("recipeIngredients","recipeIngredientRows",document.getElementById("recipeIngredients").value);
  document.getElementById("recipeSteps").value=(r.steps||[]).join("\n");
  renderStepEditor("recipeSteps","recipeStepRows",document.getElementById("recipeSteps").value);
  document.getElementById("recipeNotes").value=copy?`コピー元: ${r.name||""} ${r.version||""}\n${r.notes||""}`:(r.notes||"");
  document.getElementById("recipeFavorite").checked=copy?false:!!r.favorite;
  document.getElementById("recipeDialog").dataset.parentId=copy?r.id:(r.parentRecipeId||"");
  document.getElementById("recipeDialog").showModal();
}
function nextVersion(item){
  const n=data.recipes.filter(r=>r.item===item&&/Ver\.(\d+)/.test(r.version||"")).map(r=>+(r.version.match(/Ver\.(\d+)/)||[])[1]).filter(Boolean);
  return "Ver."+(n.length?Math.max(...n)+1:1);
}

window.editRecipeMeta=function(id){
  const r=recipeById(id);
  if(!r || r.type==="official" || r.type==="web") return;
  const dlg=document.getElementById("detailDialog");
  if(dlg?.open) dlg.close();
  openRecipeForm(r,false);
};
window.copyRecipe=function(id){ editAndStartRecipe(id); };
document.getElementById("cancelRecipe").onclick=()=>document.getElementById("recipeDialog").close();
document.getElementById("addRecipe").onclick=()=>openRecipeForm();
document.getElementById("quickRecipe").onclick=()=>openRecipeForm();



function normalizeRecipeIngredients(value){
  if(Array.isArray(value)){
    return value.map(x=>{
      if(Array.isArray(x)) return [String(x[0]??""),String(x[1]??""),String(x[2]??"")];
      if(x && typeof x==="object") return [String(x.name??""),String(x.qty??""),String(x.unit??"")];
      return [String(x??""),"",""];
    }).filter(x=>x[0].trim()!=="");
  }
  if(typeof value==="string"){
    const sep=value.includes(";;") ? ";;" : "\n";
    return value.split(sep).map(s=>s.trim()).filter(Boolean).map(line=>{
      const p=line.split("|").map(x=>x.trim());
      return [p[0]||"",p[1]||"",p[2]||""];
    }).filter(x=>x[0]);
  }
  return [];
}
function normalizeRecipeSteps(value){
  if(Array.isArray(value)) return value.map(x=>String(x??"").trim()).filter(Boolean);
  if(typeof value==="string"){
    const sep=value.includes(";;") ? ";;" : "\n";
    return value.split(sep).map(x=>x.trim()).filter(Boolean);
  }
  return [];
}
function repairRecipeSchema(target){
  if(!target || !Array.isArray(target.recipes)) return false;
  let changed=false;
  target.recipes.forEach(r=>{
    if(!Array.isArray(r.ingredients)){ r.ingredients=normalizeRecipeIngredients(r.ingredients); changed=true; }
    if(!Array.isArray(r.steps)){ r.steps=normalizeRecipeSteps(r.steps); changed=true; }
    if(!r.version && r.recipeVersion){ r.version=String(r.recipeVersion); delete r.recipeVersion; changed=true; }
  });
  return changed;
}

function parseIngredientsText(txt){
  return txt.split("\n").map(x=>x.trim()).filter(Boolean).map(line=>{
    const p=line.split("|").map(s=>s.trim());
    return [p[0]||"",p[1]||"",p[2]||""];
  });
}
function formatIngredients(ingredients){
  return (ingredients||[]).map(x=>`${x[0]||""} | ${x[1]||""} | ${x[2]||""}`.replace(/\s+\|\s*$/,"")).join("\n");
}

function snapshotFromRecipe(source){
  return {
    name:source.name||"",
    item:source.item||source.name||"",
    menuNo:source.menuNo||"",
    menuName:source.menuName||"",
    ingredients:JSON.parse(JSON.stringify(source.ingredients||[])),
    steps:[...(source.steps||[])],
    notes:""
  };
}
function todayLocal(){
  const now=new Date();
  return new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
}
window.startRecipeDirect=function(id){
  const source=recipeById(id);
  if(!source)return;
  const rec={
    id:uid("b"),
    recipeId:source.id,
    date:todayLocal(),
    rating:"",
    comment:"",
    next:"",
    photo:"",
    status:"in_progress",
      updatedAt: nowIso(),
    startedAt:new Date().toISOString(),
    workingRecipe:snapshotFromRecipe(source),
    sourceSnapshot:{
      name:source.name||"",item:source.item||"",version:source.version||"",
      menuNo:source.menuNo||"",menuName:source.menuName||""
    }
  };
  data.records.push(rec);
  localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
  const dlg=document.getElementById("detailDialog");
  if(dlg?.open) dlg.close();
  renderAll();
  nav("history");
  toast("履歴に「作成中」として追加しました");
}
window.editAndStartRecipe=function(id){
  const dlg=document.getElementById("detailDialog");
  if(dlg?.open) dlg.close();
  nav("bake");
  document.getElementById("bakeRecipeSelect").value=id;
  loadBakeTemplate(id);
}

function normalizeIngredientMap(ingredients){
  const m={};
  (ingredients||[]).forEach(x=>{
    const key=(x[0]||"").trim();
    if(key) m[key]={qty:String(x[1]??""),unit:String(x[2]??"")};
  });
  return m;
}
function getStandardAncestor(recipe){
  if(!recipe) return null;
  let cur=recipe, guard=0;
  while(cur && cur.parentRecipeId && guard<20){
    const p=recipeById(cur.parentRecipeId);
    if(!p) break;
    cur=p; guard++;
  }
  if(cur && (cur.type==="official"||cur.type==="web")) return cur;
  return data.recipes.find(r=>r.item===recipe.item && (r.type==="official"||r.type==="web")) || null;
}
function getPreviousVersion(recipe){
  if(!recipe) return null;
  if(recipe.parentRecipeId) return recipeById(recipe.parentRecipeId);
  const peers=data.recipes
    .filter(r=>r.item===recipe.item && r.id!==recipe.id)
    .filter(r=>r.type==="custom"||r.type==="variant")
    .sort((a,b)=>{
      const av=+(String(a.version||"").match(/Ver\.(\d+)/)?.[1]||0);
      const bv=+(String(b.version||"").match(/Ver\.(\d+)/)?.[1]||0);
      return bv-av;
    });
  return peers[0]||null;
}
function computeDiffLines(currentIngredients,currentSteps,base,label,className){
  if(!base) return [];
  const out=[];
  const curMap=normalizeIngredientMap(currentIngredients);
  const baseMap=normalizeIngredientMap(base.ingredients||[]);
  const names=[...new Set([...Object.keys(baseMap),...Object.keys(curMap)])];
  names.forEach(name=>{
    const a=baseMap[name], b=curMap[name];
    const av=a?`${a.qty}${a.unit}`:"なし";
    const bv=b?`${b.qty}${b.unit}`:"なし";
    if(av!==bv) out.push({cls:className,title:`${label}：${name}`,text:`${av} → ${bv}`});
  });
  const baseSteps=(base.steps||[]).map(x=>String(x).trim()).filter(Boolean);
  const curSteps=(currentSteps||[]).map(x=>String(x).trim()).filter(Boolean);
  const max=Math.max(baseSteps.length,curSteps.length);
  for(let i=0;i<max;i++){
    const a=baseSteps[i]||"なし", b=curSteps[i]||"なし";
    if(a!==b) out.push({cls:className,title:`${label}：手順${i+1}`,text:`${a} → ${b}`});
  }
  return out;
}
function renderWorkingDiff(){
  const source=recipeById(document.getElementById("workingSourceRecipeId").value);
  const wrap=document.getElementById("diffPreview");
  if(!source || !wrap) return;
  const currentIngredients=parseIngredientsText(document.getElementById("workingIngredients").value);
  const currentSteps=document.getElementById("workingSteps").value.split("\n").map(x=>x.trim()).filter(Boolean);
  const standard=getStandardAncestor(source);
  const previous=getPreviousVersion(source);
  const reds=computeDiffLines(currentIngredients,currentSteps,standard,"標準から","red");
  const blues=computeDiffLines(currentIngredients,currentSteps,previous,"前バージョンから","blue");
  const rows=[...reds,...blues];
  wrap.innerHTML=rows.length
    ? rows.map(x=>`<div class="diff-row ${x.cls}"><strong>${esc(x.title)}</strong>${esc(x.text)}</div>`).join("")
    : '<div class="muted">変更点はありません。</div>';
}
function loadBakeTemplate(id){
  const r=recipeById(id); if(!r)return;
  document.getElementById("workingSourceRecipeId").value=r.id;
  document.getElementById("workingName").value=r.name||"";
  document.getElementById("workingItem").value=r.item||r.name||"";
  document.getElementById("workingMenuNo").value=r.menuNo||"";
  document.getElementById("workingMenuName").value=r.menuName||"";
  document.getElementById("workingIngredients").value=formatIngredients(r.ingredients||[]);
  renderIngredientEditor("workingIngredients","workingIngredientRows",document.getElementById("workingIngredients").value);
  document.getElementById("workingSteps").value=(r.steps||[]).join("\n");
  renderStepEditor("workingSteps","workingStepRows",document.getElementById("workingSteps").value);
  document.getElementById("workingNotes").value="";
  document.getElementById("bakeEditorWrap").classList.remove("hidden");
  renderWorkingDiff();
  document.getElementById("bakeEditorWrap").scrollIntoView({behavior:"smooth",block:"start"});
}

["workingMenuNo","workingMenuName","workingName","workingItem"].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.addEventListener("input",renderWorkingDiff);
});
document.getElementById("loadBakeTemplate").onclick=()=>loadBakeTemplate(document.getElementById("bakeRecipeSelect").value);
document.getElementById("cancelWorkingBake").onclick=()=>{
  document.getElementById("bakeEditorWrap").classList.add("hidden");
};
document.getElementById("startWorkingBake").onclick=()=>{
  syncStepEditor("workingSteps","workingStepRows");
  syncIngredientEditor("workingIngredients","workingIngredientRows");
  try{
    const sourceId=document.getElementById("workingSourceRecipeId").value;
    const source=recipeById(sourceId);
    if(!source){
      alert("テンプレートを選び直してください。");
      return;
    }

    const workingRecipe={
      name:document.getElementById("workingName").value.trim() || source.name,
      item:document.getElementById("workingItem").value.trim() || source.item,
      menuNo:document.getElementById("workingMenuNo").value.trim(),
      menuName:document.getElementById("workingMenuName").value.trim(),
      ingredients:parseIngredientsText(document.getElementById("workingIngredients").value),
      steps:document.getElementById("workingSteps").value.split("\n").map(x=>x.trim()).filter(Boolean),
      notes:document.getElementById("workingNotes").value.trim()
    };

    const standard=getStandardAncestor(source);
    const previous=getPreviousVersion(source);
    const rec={
      id:uid("b"),
      recipeId:sourceId,
      date:todayLocal(),
      rating:"",
      comment:"",
      next:"",
      photo:"",
      status:"in_progress",
      updatedAt: nowIso(),
      startedAt:new Date().toISOString(),
      workingRecipe,
      sourceSnapshot:{
        name:source.name||"",item:source.item||"",version:source.version||"",
        menuNo:source.menuNo||"",menuName:source.menuName||""
      },
      diffStandard:computeDiffLines(workingRecipe.ingredients,workingRecipe.steps,standard,"標準から","red"),
      diffPrevious:computeDiffLines(workingRecipe.ingredients,workingRecipe.steps,previous,"前バージョンから","blue")
    };

    data.records.push(rec);
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
    document.getElementById("bakeEditorWrap").classList.add("hidden");
    renderAll();
    nav("history");
    toast("編集した内容で「作成中」として履歴に追加しました");
  }catch(err){
    console.error(err);
    alert("作成開始の保存に失敗しました。入力内容を確認してください。");
  }
};
document.getElementById("quickBake").onclick=()=>{nav("bake");};
window.openBake=function(id){ editAndStartRecipe(id); }

function openBakeEvaluation(recordId){
  const rec=data.records.find(x=>x.id===recordId); if(!rec)return;
  document.getElementById("bakeRecordId").value=rec.id;
  document.getElementById("bakeDialogTitle").textContent=rec.status==="in_progress"?"完成後の評価を入力":"評価を編集";
  document.getElementById("bakeDate").value=rec.date||new Date().toISOString().slice(0,10);
  document.getElementById("bakeRating").value=rec.rating||"";
  document.getElementById("bakeComment").value=rec.comment||"";
  document.getElementById("bakeNext").value=rec.next||"";
  document.getElementById("bakePhoto").value="";
  const wrap=document.getElementById("existingPhotoWrap");
  wrap.innerHTML=rec.photo?`<img src="${rec.photo}" style="width:100%;max-height:220px;object-fit:cover;border-radius:14px;margin-top:10px">`:"";
  document.getElementById("detailDialog").close();
  document.getElementById("bakeDialog").showModal();
}
window.openBakeEvaluation=openBakeEvaluation;
document.getElementById("cancelBake").onclick=()=>document.getElementById("bakeDialog").close();

document.getElementById("bakeForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const id=document.getElementById("bakeRecordId").value;
  const rec=data.records.find(x=>x.id===id); if(!rec)return;
  const file=document.getElementById("bakePhoto").files[0];
  const newPhoto=file?await imageToDataUrl(file):rec.photo||"";
  rec.date=document.getElementById("bakeDate").value;
  rec.rating=document.getElementById("bakeRating").value;
  rec.comment=document.getElementById("bakeComment").value.trim();
  rec.next=document.getElementById("bakeNext").value.trim();
  rec.photo=newPhoto;
  rec.status="completed";
  rec.completedAt=new Date().toISOString();
  document.getElementById("bakeDialog").close();
  rec.updatedAt = nowIso();
    save();
  nav("history");
  toast("評価を保存しました");
});


window.deleteRecord=function(id){
  const rec=data.records.find(x=>x.id===id);
  if(!rec){
    alert("削除対象の作成記録が見つかりません。");
    return;
  }
  const source=recipeById(rec.recipeId)||{};
  const item=rec.workingRecipe?.item||source.item||"この記録";

  // 誤操作防止
  const ok=window.confirm(
    `${rec.date}「${item}」の作成記録を削除します。\n\nこの操作は元に戻せません。削除してよろしいですか？`
  );
  if(!ok) return;

  data.records=data.records.filter(x=>x.id!==id);

  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
  }catch(e){
    alert("削除データの保存に失敗しました。");
    return;
  }

  const dlg=document.getElementById("detailDialog");
  if(dlg && dlg.open) dlg.close();
  renderAll();
  toast("作成記録を削除しました");
};

window.deleteRecipe=function(id){
  const r=recipeById(id);
  if(!r){
    alert("削除対象のレシピが見つかりません。");
    return;
  }

  // 公式レシピは削除不可
  if(r.type==="official" || r.type==="web"){
    alert("公式レシピは削除できません。");
    return;
  }

  const linked=data.records.filter(x=>x.recipeId===id);
  let message=`「${r.name} ${r.version||""}」を削除します。\n\nこの操作は元に戻せません。`;
  if(linked.length){
    message+=`\n\nこのレシピに紐づく作成履歴が ${linked.length} 件あります。\nレシピと履歴をまとめて削除します。`;
  }
  message+="\n\n削除してよろしいですか？";

  // 誤操作防止
  const ok=window.confirm(message);
  if(!ok) return;

  data.recipes=data.recipes.filter(x=>x.id!==id);
  if(linked.length){
    data.records=data.records.filter(x=>x.recipeId!==id);
  }
  data.recipes.forEach(x=>{
    if(x.parentRecipeId===id) x.parentRecipeId="";
  });

  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
  }catch(e){
    alert("削除データの保存に失敗しました。");
    return;
  }

  const dlg=document.getElementById("detailDialog");
  if(dlg && dlg.open) dlg.close();
  renderAll();
  toast("レシピを削除しました");
};

window.copyRecipeForChat=function(id){
  const r=recipeById(id); if(!r)return;
  const txt=`IBM-010-Cのパン作り相談です。\nレシピ: ${r.name} ${r.version||""}\n品目: ${r.item}\nメニュー: ${r.menuNo||"-"} ${r.menuName||""}\n材料:\n${(r.ingredients||[]).map(x=>`- ${x[0]} ${x[1]}${x[2]}`).join("\n")}\n作り方:\n${(r.steps||[]).map((s,i)=>`${i+1}. ${s}`).join("\n")}\nメモ: ${r.notes||""}`;
  copyText(txt);
}

window.saveWorkingRecipeAsVariant=function(id){
  const rec=data.records.find(x=>x.id===id); if(!rec)return;
  const source=recipeById(rec.recipeId)||{};
  const wr=rec.workingRecipe||source;
  const nr={
    id:uid("r"),
    item:wr.item||source.item||wr.name,
    name:wr.name||source.name||"新しいレシピ",
    version:nextVersion(wr.item||source.item||wr.name),
    type:"variant",
    parentRecipeId:rec.recipeId,
    favorite:false,
    rating:"",
    menuNo:wr.menuNo||"",
    menuName:wr.menuName||"",
    ingredients:JSON.parse(JSON.stringify(wr.ingredients||[])),
    steps:[...(wr.steps||[])],
    notes:(wr.notes||"")+(wr.notes?"\n":"")+`作成記録 ${rec.date} から保存`
  };
  data.recipes.unshift(nr);
  save();
  toast("今回の内容を改良版レシピとして保存しました");
}
window.copyRecordForChat=function(id){
  const rec=data.records.find(x=>x.id===id); const source=recipeById(rec?.recipeId); if(!rec)return;
  const r=rec.workingRecipe||source||{};
  const txt=`IBM-010-Cで作った結果について相談です。
作成日: ${rec.date}
今回のレシピ: ${r.name||""}
メニュー: ${r.menuNo||"-"} ${r.menuName||""}
材料:
${(r.ingredients||[]).map(x=>`- ${x[0]} ${x[1]}${x[2]}`).join("\n")}
手順:
${(r.steps||[]).map((s,i)=>`${i+1}. ${s}`).join("\n")}
評価: ${rec.rating?rec.rating+" / 5":"未評価"}
感想: ${rec.comment||"未入力"}
次回改善: ${rec.next||"未入力"}`;
  copyText(txt);
}
function copyText(txt){ navigator.clipboard?.writeText(txt).then(()=>toast("コピーしました")).catch(()=>{prompt("コピーしてください",txt)}); }

document.getElementById("toggleBreakdown").onclick=()=>document.getElementById("breakdown").classList.toggle("hidden");
["recipeSearch","recipeClassFilter","recipeTypeFilter","favoritesOnly"].forEach(id=>document.getElementById(id).addEventListener(id==="recipeSearch"?"input":"change",renderRecipes));


const INGREDIENT_UNITS=["g","ml","cc","個","本","枚","袋","缶","大さじ","小さじ","適量","少々","その他"];

function parseIngredientLinesForEditor(text){
  return String(text||"").split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(line=>{
    const parts=line.split("|").map(s=>s.trim());
    return {name:parts[0]||"", qty:parts[1]||"", unit:parts[2]||"g"};
  });
}

function editorRowsToText(rowsId){
  return [...document.querySelectorAll(`#${rowsId} .ingredient-row`)].map(row=>{
    const name=row.querySelector(".ingredient-name")?.value.trim()||"";
    const qty=row.querySelector(".ingredient-qty")?.value.trim()||"";
    const select=row.querySelector(".ingredient-unit");
    let unit=select?.value||"g";
    if(unit==="その他") unit=row.querySelector(".ingredient-unit-custom")?.value.trim()||"";
    return name ? `${name} | ${qty} | ${unit}` : "";
  }).filter(Boolean).join("\n");
}

function syncIngredientEditor(textareaId, rowsId){
  const ta=document.getElementById(textareaId);
  if(ta) ta.value=editorRowsToText(rowsId);
  if(textareaId==="workingIngredients" && typeof renderWorkingDiff==="function") renderWorkingDiff();
}

function makeIngredientEditorRow(textareaId, rowsId, item={name:"",qty:"",unit:"g"}){
  const row=document.createElement("div");
  row.className="ingredient-row";

  const name=document.createElement("input");
  name.type="text";
  name.className="ingredient-name";
  name.placeholder="材料名";
  name.value=item.name||"";

  const qtyWrap=document.createElement("div");
  qtyWrap.className="qty-control";

  const minus=document.createElement("button");
  minus.type="button";
  minus.textContent="−";
  minus.className="secondary";
  minus.setAttribute("aria-label","数量を減らす");

  const qty=document.createElement("input");
  qty.type="number";
  qty.inputMode="decimal";
  qty.step="0.1";
  qty.className="ingredient-qty";
  qty.placeholder="数量";
  qty.value=item.qty||"";

  const plus=document.createElement("button");
  plus.type="button";
  plus.textContent="+";
  plus.className="secondary";
  plus.setAttribute("aria-label","数量を増やす");

  qtyWrap.append(minus,qty,plus);

  const unitWrap=document.createElement("div");
  const unit=document.createElement("select");
  unit.className="ingredient-unit";
  INGREDIENT_UNITS.forEach(u=>{
    const opt=document.createElement("option");
    opt.value=u; opt.textContent=u;
    unit.appendChild(opt);
  });

  const known=INGREDIENT_UNITS.includes(item.unit);
  unit.value=known ? (item.unit||"g") : "その他";

  const custom=document.createElement("input");
  custom.type="text";
  custom.className="ingredient-unit-custom";
  custom.placeholder="単位";
  custom.value=known ? "" : (item.unit||"");
  custom.hidden=unit.value!=="その他";
  unitWrap.append(unit,custom);

  const remove=document.createElement("button");
  remove.type="button";
  remove.textContent="×";
  remove.className="secondary ingredient-remove";
  remove.title="この材料を削除";

  const adjust=(dir)=>{
    const current=parseFloat(qty.value||"0")||0;
    // 1g単位が中心だが、1未満では0.1刻み
    const step=Math.abs(current)<1 ? 0.1 : 1;
    const next=Math.max(0,current+(dir*step));
    qty.value=Number.isInteger(next)?String(next):String(Math.round(next*10)/10);
    syncIngredientEditor(textareaId,rowsId);
  };

  minus.addEventListener("click",()=>adjust(-1));
  plus.addEventListener("click",()=>adjust(1));
  [name,qty,custom].forEach(el=>el.addEventListener("input",()=>syncIngredientEditor(textareaId,rowsId)));
  unit.addEventListener("change",()=>{
    custom.hidden=unit.value!=="その他";
    syncIngredientEditor(textareaId,rowsId);
  });
  remove.addEventListener("click",()=>{
    row.remove();
    syncIngredientEditor(textareaId,rowsId);
  });

  row.append(name,qtyWrap,unitWrap,remove);
  return row;
}

function renderIngredientEditor(textareaId, rowsId, text){
  const host=document.getElementById(rowsId);
  if(!host) return;
  host.innerHTML="";
  const items=parseIngredientLinesForEditor(text);
  (items.length?items:[{name:"",qty:"",unit:"g"}]).forEach(item=>{
    host.appendChild(makeIngredientEditorRow(textareaId,rowsId,item));
  });
  syncIngredientEditor(textareaId,rowsId);
}

function addIngredientEditorRow(textareaId,rowsId){
  const host=document.getElementById(rowsId);
  if(!host) return;
  host.appendChild(makeIngredientEditorRow(textareaId,rowsId,{name:"",qty:"",unit:"g"}));
  syncIngredientEditor(textareaId,rowsId);
}


function stepNumberLabel(index){
  const circled=["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯","⑰","⑱","⑲","⑳"];
  return circled[index] || String(index+1);
}

function parseStepsText(text){
  return String(text||"").split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
}

function stepRowsToText(rowsId){
  return [...document.querySelectorAll(`#${rowsId} .step-row textarea`)]
    .map(el=>el.value.trim())
    .filter(Boolean)
    .join("\n");
}

function renumberStepRows(rowsId){
  [...document.querySelectorAll(`#${rowsId} .step-row`)].forEach((row,i)=>{
    const badge=row.querySelector(".step-number");
    if(badge) badge.textContent=stepNumberLabel(i);
  });
}

function syncStepEditor(textareaId, rowsId){
  const ta=document.getElementById(textareaId);
  if(ta) ta.value=stepRowsToText(rowsId);
  renumberStepRows(rowsId);
  if(textareaId==="workingSteps" && typeof renderWorkingDiff==="function") renderWorkingDiff();
}

function makeStepEditorRow(textareaId, rowsId, text=""){
  const row=document.createElement("div");
  row.className="step-row";

  const num=document.createElement("div");
  num.className="step-number";

  const area=document.createElement("textarea");
  area.placeholder="作り方を入力";
  area.value=text||"";
  area.addEventListener("input",()=>syncStepEditor(textareaId,rowsId));

  const remove=document.createElement("button");
  remove.type="button";
  remove.textContent="×";
  remove.className="secondary step-remove";
  remove.title="このステップを削除";
  remove.addEventListener("click",()=>{
    row.remove();
    syncStepEditor(textareaId,rowsId);
  });

  row.append(num,area,remove);
  return row;
}

function renderStepEditor(textareaId, rowsId, text){
  const host=document.getElementById(rowsId);
  if(!host) return;
  host.innerHTML="";
  const steps=parseStepsText(text);
  (steps.length?steps:[""]).forEach(step=>{
    host.appendChild(makeStepEditorRow(textareaId,rowsId,step));
  });
  syncStepEditor(textareaId,rowsId);
}

function addStepEditorRow(textareaId,rowsId){
  const host=document.getElementById(rowsId);
  if(!host) return;
  host.appendChild(makeStepEditorRow(textareaId,rowsId,""));
  syncStepEditor(textareaId,rowsId);
  const last=host.lastElementChild?.querySelector("textarea");
  last?.focus();
}

function toast(msg){
  const t=document.getElementById("toast"); t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);
}
document.getElementById("openSettings").onclick=()=>document.getElementById("settingsDialog").showModal();
document.getElementById("closeSettings").onclick=()=>document.getElementById("settingsDialog").close();

document.getElementById("exportData").onclick=()=>{
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`bread-log-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href);
};
document.getElementById("importData").addEventListener("change",e=>{
  const f=e.target.files[0];if(!f)return;const fr=new FileReader();
  fr.onload=()=>{try{data=JSON.parse(fr.result);save();toast("バックアップを読み込みました");}catch{alert("読み込みに失敗しました");}};fr.readAsText(f);
});
document.getElementById("resetData").onclick=()=>{
  if(confirm("現在のデータを消して初期状態に戻しますか？")){data=defaultData();save();document.getElementById("settingsDialog").close();toast("初期状態に戻しました");}
};


renderAll();




// v0.20 migration safety: collect all historical local copies and merge them.
function readAllBreadLocalCopies(){
  const copies=[];
  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i)||"";
    if(!/^breadLogIBM010C_v\d+$/.test(key)) continue;
    try{
      const parsed=JSON.parse(localStorage.getItem(key)||"null");
      if(parsed && Array.isArray(parsed.recipes) && Array.isArray(parsed.records)) copies.push({key,data:parsed});
    }catch(e){}
  }
  return copies;
}
function recipeRichness(r){
  return (r?.ingredients?.length||0)*3+(r?.steps?.length||0)*2+(r?.notes?1:0)+(r?.versionNote?1:0)+(r?.favorite?1:0);
}
function mergeBreadData(base, incoming){
  const result=JSON.parse(JSON.stringify(base||defaultData()));
  result.recipes=Array.isArray(result.recipes)?result.recipes:[];
  result.records=Array.isArray(result.records)?result.records:[];
  const inRecipes=Array.isArray(incoming?.recipes)?incoming.recipes:[];
  const inRecords=Array.isArray(incoming?.records)?incoming.records:[];

  inRecipes.forEach(r=>{
    if(!r || !r.id) return;
    const ix=result.recipes.findIndex(x=>x.id===r.id);
    if(ix<0) result.recipes.push(JSON.parse(JSON.stringify(r)));
    else if(recipeRichness(r)>recipeRichness(result.recipes[ix]) || !["official","web"].includes(r.type)){
      result.recipes[ix]={...result.recipes[ix],...JSON.parse(JSON.stringify(r))};
    }
  });
  inRecords.forEach(rec=>{
    if(!rec || !rec.id) return;
    const incomingRec=JSON.parse(JSON.stringify(rec));

    // Repair timestamps polluted by v0.25 on unevaluated records.
    const incomingHasEval=!!(incomingRec.rating || incomingRec.comment || incomingRec.next || incomingRec.photo);
    if(!incomingHasEval){
      incomingRec.updatedAt=incomingRec.completedAt || incomingRec.date || "";
    }

    const ix=result.records.findIndex(x=>x.id===incomingRec.id);
    if(ix<0){
      result.records.push(incomingRec);
    }else{
      const current=result.records[ix];
      const currentHasEval=!!(current.rating || current.comment || current.next || current.photo);
      if(!currentHasEval){
        current.updatedAt=current.completedAt || current.date || "";
      }

      const a=recordUpdatedAt(current);
      const b=recordUpdatedAt(incomingRec);
      const score=x =>
        (x?.rating ? 4 : 0) +
        (x?.comment ? 2 : 0) +
        (x?.next ? 1 : 0) +
        (x?.photo ? 1 : 0);

      if(b>a || (b===a && score(incomingRec)>score(current))){
        result.records[ix]={...current,...incomingRec};
      }
    }
  });
  if(incoming?.machine) result.machine={...(result.machine||{}),...incoming.machine};
  result.version=20;
  repairRecipeSchema(result);
  return result;
}
function recoverAllLocalData(seed){
  let merged=JSON.parse(JSON.stringify(seed||defaultData()));
  readAllBreadLocalCopies().forEach(c=>{ merged=mergeBreadData(merged,c.data); });
  return merged;
}
function dataSummary(d){
  const custom=(d?.recipes||[]).filter(r=>r.type==="custom"||r.type==="variant").length;
  const records=(d?.records||[]).length;
  const evaluated=(d?.records||[]).filter(r=>r.rating||r.comment||r.next||r.photo).length;
  return `カスタムレシピ ${custom}件・履歴 ${records}件・評価済み ${evaluated}件`;
}


function mergeRecordsByFreshness(remoteRecords=[], localRecords=[]){
  const byId=new Map();

  const choose=(a,b)=>{
    if(!a) return normalizeRecordForMerge(b);
    if(!b) return normalizeRecordForMerge(a);

    const A=normalizeRecordForMerge(a);
    const B=normalizeRecordForMerge(b);

    const ta=safeIso(A.updatedAt || A.completedAt || A.date || "");
    const tb=safeIso(B.updatedAt || B.completedAt || B.date || "");

    if(tb>ta) return {...A,...B};
    if(ta>tb) return {...B,...A};

    // When timestamps tie, never let an unevaluated copy erase evaluated data.
    const sa=evalScore(A);
    const sb=evalScore(B);
    if(sb>sa) return {...A,...B};
    if(sa>sb) return {...B,...A};

    // Final tie: prefer local-side argument B so immediate edits are preserved.
    return {...A,...B};
  };

  remoteRecords.forEach(r=>{
    if(r?.id) byId.set(r.id, normalizeRecordForMerge(r));
  });
  localRecords.forEach(r=>{
    if(!r?.id) return;
    byId.set(r.id, choose(byId.get(r.id), r));
  });

  return Array.from(byId.values());
}

function mergeRecipesById(remoteRecipes=[], localRecipes=[]){
  const map=new Map();
  [...remoteRecipes,...localRecipes].forEach(r=>{
    if(!r || !r.id) return;
    const existing=map.get(r.id);
    if(!existing) map.set(r.id,{...r});
    else map.set(r.id,{...existing,...r});
  });
  return Array.from(map.values());
}


function countCustomRecipes(){
  return (data?.recipes || []).filter(r => r?.type==="custom" || r?.type==="variant").length;
}
function countEvaluatedRecords(){
  return (data?.records || []).filter(r => r?.rating || r?.comment || r?.next || r?.photo).length;
}
function currentDataSummary(){
  return `カスタムレシピ ${countCustomRecipes()}件・履歴 ${data?.records?.length||0}件・評価済み ${countEvaluatedRecords()}件`;
}

// ==============================
// Google Drive sync (v0.17)
// Drive is the master after connection; localStorage remains a local cache.
// ==============================
const DRIVE_CLIENT_ID = "28938549507-62r2v0a08qu9b3vmi73gb1lp0knoi5qq.apps.googleusercontent.com";
const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.appdata";
const DRIVE_FILE_NAME = "bread-log-data.json";
const DRIVE_META_KEY = "breadLogDriveMeta_v1";

let driveTokenClient = null;
let driveAccessToken = "";
let driveFileId = "";
let driveConnected = false;
let driveSyncing = false;
let driveSaveTimer = null;
let driveAutoConnecting = false;

function getDriveMeta(){
  try { return JSON.parse(localStorage.getItem(DRIVE_META_KEY) || "{}"); }
  catch(e){ return {}; }
}
function setDriveMeta(meta){ localStorage.setItem(DRIVE_META_KEY, JSON.stringify(meta)); }

function updateDriveUI(message){
  const pill = document.getElementById("driveStatusPill");
  const text = document.getElementById("driveStatusText");
  const detail = document.getElementById("driveDetailText");
  const connect = document.getElementById("driveConnectBtn");
  const sync = document.getElementById("driveSyncBtn");
  const disconnect = document.getElementById("driveDisconnectBtn");
  if(!pill || !text) return;

  const meta=getDriveMeta();
  const linked=!!meta.connected;

  pill.classList.remove("connected","syncing");
  if(driveSyncing){
    pill.textContent="同期中";
    pill.classList.add("syncing");
    text.textContent="Google Driveへ接続中（現在は端末キャッシュ表示）";
  }else if(driveConnected){
    pill.textContent="接続済み";
    pill.classList.add("connected");
    text.textContent="使用中：Google Drive";
  }else if(linked){
    pill.textContent="連携済み";
    pill.classList.add("connected");
    text.textContent="使用中：端末キャッシュ（Drive再認証待ち）";
  }else{
    pill.textContent="未接続";
    text.textContent="使用中：端末キャッシュ";
  }

  if(detail && message) detail.textContent=message;
  if(connect){
    connect.hidden=driveConnected;
    connect.textContent=linked && !driveConnected ? "Google Driveに再接続" : "Google Driveに接続";
  }
  if(sync) sync.hidden=!driveConnected;
  if(disconnect) disconnect.hidden=!linked;
}

function initDriveClient(){
  if(!window.google?.accounts?.oauth2) return false;
  driveTokenClient = google.accounts.oauth2.initTokenClient({
    client_id: DRIVE_CLIENT_ID,
    scope: DRIVE_SCOPE,
    callback: async (resp) => {
      if(resp.error){
        driveSyncing=false;
        const wasAuto=driveAutoConnecting;
        driveAutoConnecting=false;
        updateDriveUI(wasAuto
          ? "自動接続できませんでした。端末内キャッシュを表示しています。必要な場合だけ再接続してください。"
          : "Google認証に失敗しました: "+resp.error);
        return;
      }
      driveAccessToken = resp.access_token;
      try{
        await connectDriveAfterToken();
        driveAutoConnecting=false;
      }catch(e){
        console.error(e);
        driveSyncing=false;
        const wasAuto=driveAutoConnecting;
        driveAutoConnecting=false;
        updateDriveUI(wasAuto
          ? "Driveへ自動接続できませんでした。端末内キャッシュを表示しています。"
          : "Drive接続に失敗しました: "+(e.message||e));
      }
    }
  });
  return true;
}

function requestDriveAccess(silent=false){
  driveSyncing=true;
  driveAutoConnecting=!!silent;
  updateDriveUI(silent ? "Google Driveへ自動接続しています…" : "Googleアカウントの認証画面を開きます。");

  if(!driveTokenClient && !initDriveClient()){
    driveSyncing=false;
    driveAutoConnecting=false;
    updateDriveUI("Google認証ライブラリの読み込み待ちです。数秒後にもう一度お試しください。");
    return;
  }

  try{
    driveTokenClient.requestAccessToken({prompt:silent ? "" : "consent"});
  }catch(e){
    driveSyncing=false;
    driveAutoConnecting=false;
    updateDriveUI(silent
      ? "自動接続できませんでした。必要なときだけ「Google Driveに再接続」を押してください。"
      : "Google認証を開始できませんでした。");
  }
}


async function driveErrorText(res){
  try{
    const t=await res.text();
    return t ? ` / ${t.slice(0,300)}` : "";
  }catch(e){ return ""; }
}

async function driveFetch(url, options={}){
  const headers = new Headers(options.headers||{});
  headers.set("Authorization","Bearer "+driveAccessToken);
  return fetch(url,{...options,headers});
}

async function listDriveDataFiles(){
  const q = encodeURIComponent(`name='${DRIVE_FILE_NAME}' and trashed=false`);
  const url = `https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=${q}&fields=files(id,name,modifiedTime,size)&orderBy=modifiedTime%20desc&pageSize=20`;
  const res = await driveFetch(url);
  if(!res.ok) throw new Error("Driveファイル検索エラー "+res.status+(await driveErrorText(res)));
  const body = await res.json();
  return body.files || [];
}

async function findDriveDataFile(){
  const files=await listDriveDataFiles();
  return files[0] || null;
}

async function readDriveData(fileId){
  const res = await driveFetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
  if(!res.ok) throw new Error("Driveデータ読込エラー "+res.status);
  const text=(await res.text()).replace(/^\uFEFF/,"").trim();
  if(!text) return {__invalidDriveData:true, reason:"empty"};
  try{
    return JSON.parse(text);
  }catch(e){
    return {__invalidDriveData:true, reason:"json-parse"};
  }
}

async function createDriveDataFile(payload){
  const boundary = "breadlog_"+Date.now();
  const metadata = {name:DRIVE_FILE_NAME, parents:["appDataFolder"], mimeType:"application/json"};
  const body =
    `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n`+
    JSON.stringify(metadata)+
    `\r\n--${boundary}\r\nContent-Type: application/json\r\n\r\n`+
    JSON.stringify(payload)+
    `\r\n--${boundary}--`;
  const res = await driveFetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,modifiedTime",
    {method:"POST",headers:{"Content-Type":"multipart/related; boundary="+boundary},body}
  );
  if(!res.ok) throw new Error("Drive新規保存エラー "+res.status+(await driveErrorText(res)));
  return res.json();
}

async function updateDriveDataFile(fileId, payload){
  const res = await driveFetch(
    `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media&fields=id,modifiedTime`,
    {method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}
  );
  if(!res.ok) throw new Error("Drive保存エラー "+res.status+(await driveErrorText(res)));
  return res.json();
}

function makeDrivePayload(){
  return {
    schemaVersion: 1,
    appVersion: 33,
    updatedAt: new Date().toISOString(),
    data
  };
}

function buildMergedData(payload, localSnapshot){
  const local=JSON.parse(JSON.stringify(localSnapshot || data || {}));

  let remote=null;
  if(payload && typeof payload==="object"){
    if(payload.data && typeof payload.data==="object") remote=payload.data;
    else if(Array.isArray(payload.recipes) || Array.isArray(payload.records)) remote=payload;
  }

  if(!remote) return local;

  return {
    ...remote,
    ...local,
    machine: remote.machine || local.machine,
    recipes: mergeRecipesById(remote.recipes||[], local.recipes||[]),
    records: mergeRecordsByFreshness(remote.records||[], local.records||[]),
    settings: {...(remote.settings||{}), ...(local.settings||{})}
  };
}

function applyDrivePayload(payload, localSnapshot){
  const merged=buildMergedData(payload, localSnapshot);
  data=merged;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  if(typeof renderAll==="function") renderAll();
  return merged;
}


function isValidDrivePayload(payload){
  if(payload?.__invalidDriveData) return false;
  if(!payload || typeof payload!=="object") return false;
  if(payload.data && typeof payload.data==="object") return true;
  if(Array.isArray(payload.recipes) || Array.isArray(payload.records)) return true;
  return false;
}


async function loadLatestValidDriveSnapshot(){
  const files=await listDriveDataFiles();
  for(const f of files){
    try{
      const payload=await readDriveData(f.id);
      if(isValidDrivePayload(payload)){
        return {file:f, payload};
      }
    }catch(e){
      console.warn("Skipping unreadable Drive snapshot", f.id, e);
    }
  }
  return {file:null, payload:null};
}

async function connectDriveAfterToken(){
  const localSnapshot=JSON.parse(JSON.stringify(data || {}));
  const latest=await loadLatestValidDriveSnapshot();

  if(latest.payload){
    data=buildMergedData(latest.payload, localSnapshot);
    driveFileId=latest.file.id;
  }else{
    data=localSnapshot;
    const created=await createDriveDataFile(makeDrivePayload());
    driveFileId=created.id;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  if(typeof renderAll==="function") renderAll();

  driveConnected=true;
  driveSyncing=false;

  const syncedAt=new Date().toISOString();
  setDriveMeta({fileId:driveFileId, connected:true, lastSync:syncedAt});
  updateDriveUI(
    `Drive読込済み：${currentDataSummary()} / 最終同期 ${new Date(syncedAt).toLocaleString("ja-JP")}`
  );
}

async function syncNow(){
  if(!driveConnected || !driveAccessToken){
    requestDriveAccess(false);
    return;
  }

  driveSyncing=true;
  updateDriveUI("Google Driveと同期しています。");

  const localSnapshot=JSON.parse(JSON.stringify(data || {}));

  try{
    const latest=await loadLatestValidDriveSnapshot();
    const merged=latest.payload
      ? buildMergedData(latest.payload, localSnapshot)
      : localSnapshot;

    // Keep the merged result locally first.
    data=merged;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    if(typeof renderAll==="function") renderAll();

    // Save a new immutable Drive snapshot.
    const created=await createDriveDataFile(makeDrivePayload());
    driveFileId=created.id;

    // Only after Drive confirms creation do we mark the sync as successful.
    const syncedAt=new Date().toISOString();
    setDriveMeta({
      fileId:driveFileId,
      connected:true,
      lastSync:syncedAt
    });

    driveSyncing=false;
    updateDriveUI(
      `同期完了：Driveへ保存済み / ${currentDataSummary()} / ${new Date(syncedAt).toLocaleString("ja-JP")}`
    );
  }catch(e){
    console.error("Drive sync failed:", e);

    // Never roll back user edits.
    data=localSnapshot;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    if(typeof renderAll==="function") renderAll();

    driveSyncing=false;
    updateDriveUI("同期に失敗しました："+(e?.message || String(e))+"。端末側の変更は保持されています。");
  }
}

function queueDriveSave(){
  if(!driveConnected || !driveAccessToken || !driveFileId) return;
  clearTimeout(driveSaveTimer);
  driveSaveTimer=setTimeout(()=>syncNow(),700);
}

function disconnectDrive(){
  if(driveAccessToken && window.google?.accounts?.oauth2){
    try{ google.accounts.oauth2.revoke(driveAccessToken,()=>{}); }catch(e){}
  }
  driveAccessToken="";
  driveFileId="";
  driveConnected=false;
  driveSyncing=false;
  localStorage.removeItem(DRIVE_META_KEY);
  updateDriveUI("接続を解除しました。端末内データは残っています。");
}

window.addEventListener("load", ()=>{
  document.getElementById("driveConnectBtn")?.addEventListener("click",()=>requestDriveAccess(false));
  document.getElementById("driveSyncBtn")?.addEventListener("click",syncNow);
  document.getElementById("driveDisconnectBtn")?.addEventListener("click",disconnectDrive);

  const meta=getDriveMeta();
  if(meta.connected){
    updateDriveUI("Google Driveへ自動接続しています。成功すると最新データを読み込みます。");
    // GIS script is async/defer, so wait briefly until it is available.
    let tries=0;
    const timer=setInterval(()=>{
      tries++;
      if(initDriveClient()){
        clearInterval(timer);
        requestDriveAccess(true);
        setTimeout(()=>{
          if(driveAutoConnecting && !driveConnected){
            driveSyncing=false;
            driveAutoConnecting=false;
            updateDriveUI("自動接続が完了しませんでした。現在は端末キャッシュを表示しています。再接続を押すとDriveを読み込みます。");
          }
        },8000);
      }else if(tries>=20){
        clearInterval(timer);
        updateDriveUI("Google認証ライブラリを読み込めませんでした。端末内キャッシュを表示しています。");
      }
    },250);
  }else{
    setTimeout(()=>initDriveClient(),300);
    updateDriveUI("初回接続時に、この端末の現在データをGoogle Driveへ移行します。");
  }
});



function parseRecipeCsv(text){
  const rows=[]; let row=[],field="",quoted=false;
  const s=String(text||"").replace(/^\uFEFF/,"");
  for(let i=0;i<s.length;i++){
    const ch=s[i];
    if(quoted){
      if(ch==='"' && s[i+1]==='"'){ field+='"'; i++; }
      else if(ch==='"') quoted=false;
      else field+=ch;
    }else{
      if(ch==='"') quoted=true;
      else if(ch===','){ row.push(field); field=""; }
      else if(ch==='\n'){ row.push(field); field=""; if(row.some(v=>String(v).trim()!=="")) rows.push(row); row=[]; }
      else if(ch!=='\r') field+=ch;
    }
  }
  row.push(field);
  if(row.some(v=>String(v).trim()!=="")) rows.push(row);
  return rows;
}
function csvHeaderKey(v){ return String(v||"").trim().toLowerCase().replace(/\s+/g,""); }
function csvIngredientsToArray(v){
  return String(v||"").split(";;").map(s=>s.trim()).filter(Boolean).map(s=>{
    const p=s.split("|").map(x=>x.trim());
    return [p[0]||"",p[1]||"",p[2]||""];
  }).filter(x=>x[0]);
}
function csvStepsToArray(v){
  return String(v||"").split(";;").map(s=>s.trim()).filter(Boolean);
}
function importRecipeCsvText(text){
  const rows=parseRecipeCsv(text);
  if(rows.length<2) throw new Error("CSVにデータ行がありません。");
  const headers=rows[0].map(csvHeaderKey);
  const required=["name","item","version","menuno","menuname","ingredients","steps","notes"];
  const missing=required.filter(h=>!headers.includes(h));
  if(missing.length) throw new Error("必要な列がありません: "+missing.join(", "));
  const col=Object.fromEntries(headers.map((h,i)=>[h,i]));
  const staged=[]; let skipped=0;
  for(const row of rows.slice(1)){
    const name=String(row[col.name]||"").trim();
    if(!name){ skipped++; continue; }
    const now=new Date().toISOString();
    staged.push({
      id:uid("r"),
      item:String(row[col.item]||name).trim()||name,
      name,
      version:String(row[col.version]||"Ver.1").trim()||"Ver.1",
      versionNote:"",
      type:"custom",
      parentRecipeId:"",
      favorite:false,
      rating:"",
      menuNo:String(row[col.menuno]||"").trim(),
      menuName:String(row[col.menuname]||"").trim(),
      ingredients:csvIngredientsToArray(row[col.ingredients]),
      steps:csvStepsToArray(row[col.steps]),
      notes:String(row[col.notes]||"").trim(),
      createdAt:now,
      updatedAt:now
    });
  }
  if(!staged.length) throw new Error("登録できるレシピがありません。");
  staged.forEach(r=>{
    if(!Array.isArray(r.ingredients) || r.ingredients.some(x=>!Array.isArray(x)) || !Array.isArray(r.steps)){
      throw new Error("レシピ形式の変換に失敗しました。");
    }
  });
  data.recipes=[...staged,...data.recipes];
  save();
  renderAll();
  return {added:staged.length,skipped};
}
const RECIPE_CSV_PROMPT=`パン作り記録アプリへインポートするCSVを作成してください。

【必須ヘッダー】
name,item,version,menuNo,menuName,ingredients,steps,notes

【各列】
- name: レシピ名
- item: レシピの系列名
- version: 例 Ver.1
- menuNo: ホームベーカリーのメニュー番号
- menuName: メニュー名
- ingredients: 材料を「材料名|数量|単位」で記述し、複数材料は ;; で区切る
- steps: 作り方を1ステップずつ記述し、複数ステップは ;; で区切る
- notes: 補足・注意点

【重要】
- Markdown表ではなくCSV本文だけを出力
- コードブロックは使わない
- CSVルールに従い、カンマ・改行・ダブルクォートを含むセルはダブルクォートで囲む
- ingredients内の区切りは | と ;;
- steps内の区切りは ;;

【例】
name,item,version,menuNo,menuName,ingredients,steps,notes
りんごパン,りんごパン,Ver.1,13,スイートパン,"強力粉|250|g;;砂糖|40|g;;りんご|120|g","りんごを加熱して冷ます;;材料を入れる;;メニュー13で開始","りんごは十分に冷ます"

この仕様で、私がこの後に示すレシピ情報をCSVに変換してください。`;

document.addEventListener("DOMContentLoaded",()=>{
  const importBtn=document.getElementById("importRecipeCsvBtn");
  const fileInput=document.getElementById("recipeCsvFile");
  const promptBtn=document.getElementById("copyRecipeCsvPromptBtn");
  importBtn?.addEventListener("click",()=>fileInput?.click());
  fileInput?.addEventListener("change",async()=>{
    const file=fileInput.files?.[0]; if(!file)return;
    try{
      const result=importRecipeCsvText(await file.text());
      toast(`レシピを${result.added}件追加しました`+(result.skipped?`（${result.skipped}件スキップ）`:""));
    }catch(e){
      console.error(e);
      alert("CSVの読み込みに失敗しました。\n"+(e?.message||e));
    }finally{ fileInput.value=""; }
  });
  promptBtn?.addEventListener("click",async()=>{
    try{ await navigator.clipboard.writeText(RECIPE_CSV_PROMPT); }
    catch(e){
      const ta=document.createElement("textarea"); ta.value=RECIPE_CSV_PROMPT;
      document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
    toast("CSV作成用プロンプトをコピーしました");
  });
});


// PWA: service worker registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(err => {
      console.warn("Service Worker registration failed:", err);
    });
  });
}

function countEvaluatedRecords(){
  return (data?.records||[]).filter(r=>r.rating || r.comment || r.next || r.photo).length;
}


document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("addRecipeIngredientRowBtn")?.addEventListener("click",()=>{
    addIngredientEditorRow("recipeIngredients","recipeIngredientRows");
  });
  document.getElementById("addWorkingIngredientRowBtn")?.addEventListener("click",()=>{
    addIngredientEditorRow("workingIngredients","workingIngredientRows");
  });

  const recipeTa=document.getElementById("recipeIngredients");
  if(recipeTa) renderIngredientEditor("recipeIngredients","recipeIngredientRows",recipeTa.value);

  const workingTa=document.getElementById("workingIngredients");
  if(workingTa) renderIngredientEditor("workingIngredients","workingIngredientRows",workingTa.value);
});

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("addRecipeStepRowBtn")?.addEventListener("click",()=>{
    addStepEditorRow("recipeSteps","recipeStepRows");
  });
  document.getElementById("addWorkingStepRowBtn")?.addEventListener("click",()=>{
    addStepEditorRow("workingSteps","workingStepRows");
  });

  const recipeTa=document.getElementById("recipeSteps");
  if(recipeTa) renderStepEditor("recipeSteps","recipeStepRows",recipeTa.value);

  const workingTa=document.getElementById("workingSteps");
  if(workingTa) renderStepEditor("workingSteps","workingStepRows",workingTa.value);
});
