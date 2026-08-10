// 算術演算子を使用して計算してみよう
// 1.合計点数を算出してください
// 国語: 100, 数学: 80, 英語: 75, 理科: 70, 社会: 80
// これらの合計を算術演算子（+を使った足し算）で計算し、コンソールに表示してください。
const testResult = {japanese:100, math:80, english:75, science:70, society:80};
const total = testResult.japanese + testResult.math + testResult.english + testResult.science + testResult.society;
console.log(total);

// 2.引き算を使用して計算してください 100,000 - 80,000 の結果を算術演算子(-)で計算し、コンソールに表示してください
console.log(100000 - 80000);

// 3.掛け算を使用して計算してください 32 × 64 の結果を算術演算子(* )で計算し、コンソールに表示してください
console.log(32 * 64);

// 4.割り算を使用して計算してください 10 ÷ 2 の結果を算術演算子（/）で計算し、コンソールに表示してください。
console.log(10 / 2);

// 5.インクリメント演算子を使用してください 以下の変数に +1 してコンソールに表示してください:let num = 3;
let num = 3;
console.log(num += 1);

// 6.デクリメント演算子を使用してください 以下の変数に -1 してコンソールに表示してください:let num = 0;
let num2 = 0;
console.log(num2 -= 1);


// 条件分岐を練習してみよう
// 1.if文を使用して所持金を比較してください A君の所持金は 8000円、B君の所持金は 12000円 です。if 文を使って、どちらの所持金が多いかを表示してください。
const humanA = 8000, humanB = 12000;
if (humanA > humanB){
    console.log(humanA);
};
if (humanA < humanB){
    console.log(humanB);
};

// 2.if文を使用して誰が最も所持金を持っているかを表示してください A君: 8000円, B君: 12000円, C君: 3000円。if 文を使って、誰の所持金が一番多いかを表示してください。
const humanC = 3000;
if (humanA > humanB && humanA > humanC){
    console.log(humanA);
};
if (humanB > humanA && humanB > humanC){
    console.log(humanB);
};
if (humanC > humanA && humanC > humanB){
    console.log(humanC);
};

// 3.点数に応じてメッセージをアラート表示してください ボタンを押すとランダムに 1〜100 の数値が表示されます。この点数に基づいて以下の
// 条件に従ってアラートを表示してください:点数100「満点！！」,点数80点以上「合格です」,点数30点以上「赤点です」,それ以外「不合格です」
const randomBtn = document.getElementById("random-btn");
randomBtn.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    alert(randomNumber);
});

// 4.switch文を使用して入力値に応じた結果を表示してください テキストボックスに入力された値が変更されたとき、以下の条件に従って 
// console.log に結果を表示してください: "saitama" の場合「埼玉」, "tokyo" の場合「東京」, "kanagawa" の場合「神奈川」,その他の場合「未確認」
const prefecture = prompt("県名を入力してください")
switch(prefecture){
    case "saitama":
        console.log("埼玉");
        break;
    case "tokyo":
        console.log("東京");
        break;
    case "kanagawa":
        console.log("神奈川");
        break;
    default:
        console.log("未確認");
        break;
};


// Mathオブジェクトを使ってみよう
// Math オブジェクトを使用して、1〜10 のランダムな値を生成する関数を作成し、結果をコンソールに表示してください。
const random = () => {
    return Math.floor(Math.random() * 10) + 1;
};
console.log(random());

// 最も高い数値を見つけてくださいMath オブジェクトを使用して、以下の中で最も高い数値をコンソールに表示してください:1, 4, 6
const maxnum = (a, b, c) => {
    return Math.max(a, b, c);
};
console.log(maxnum(1, 4, 6));

// 最も低い数値を見つけてくださいMath オブジェクトを使用して、以下の中で最も低い数値をコンソールに表示してください:1, 4, 6
const minnum = (a, b, c) => {
    return Math.min(a, b, c);
};
console.log(minnum(1, 4, 6));


// for文を使用してループ処理を練習しましょう
// 1.「実行」を10回表示してくださいfor 文を使用して、コンソールに「実行」と10回表示してください。
for (let i = 1; i <= 10; i++){
    console.log("実行");
};

// 2.配列の中身を表示してください配列 ['apple', 'banana', 'cat'] の要素を1つずつ for 文を使ってコンソールに表示してください。
lists = ['apple', 'banana', 'cat'];
for (const list of lists){
    console.log(list);
};

// 3.配列の合計を計算してください配列 [1, 2, 3] を for 文でループし、各要素を足し算して合計値 6 をコンソールに表示してください。
numberLists = [1, 2, 3];
let totals = 0;
for (const numberList of numberLists){
    totals += numberList;
    console.log(totals);
};

// 4.配列を分割してください配列 A = [1, 'hoge', 2, 'huga', 3, 'piyo'] を for 文でループして、数値だけの配列と文字列だけの配列をそれぞれ作成し、コンソールに表示してください。
const testArray = [1, 'hoge', 2, 'huga', 3, 'piyo'];
const numbers = [];
const texts = [];
for (const item of testArray){
    if (typeof item === 'number'){
        numbers.push(item);
    };
    if (typeof item === 'string'){
        texts.push(item);
    };
};
console.log(numbers, texts);

// 5.奇数のみ足し算してくださいfor 文を使用して 1〜100 をループし、奇数回のみ「1 + 3 + 5 + ...」のように足し算を行い、結果をコンソールに表示してください。
// 必ずcontinue を使ってください。
let oddTotal = 0;
for (let i = 1; i <= 100; i++){
    if (i % 2 === 1){
        oddTotal += i;
    }
    else{
        continue;
    };
};
console.log(oddTotal);


// 他の繰り返し文を使ってみましょう
// 1.forEachを使ってループ処理を試してみましょう 配列 ['apple', 'banana', 'cat'] を forEach を使って要素を1つずつコンソールに表示してください。
lists.forEach(ary => {
    console.log(ary);
});

// 2.while文を使ってループ処理を試してみましょう 変数 i = 0 を初期値として、while 文で 10回「実行」を表示してください。
let i = 0;
while(i < 10){
    console.log("実行");
    i++ ;
};

// 3.繰り返し文の用途を調べてみましょう for, foreach, while の違いや使い分けについて調べ、それぞれの用途に合ったコード例を1つ作成してください。
// for：繰り返し回数が決まっている場合　foreach：配列の中身を順番に処理する場合　while：特定の条件を満たす間繰り返す場合
// forを用いた例:1から10までの数を足した合計をカーソルに表示する
let numTotal = 0;
for (let i = 0; i <= 10; i++){
    numTotal += i;
    if (i === 10){
        console.log(numTotal);
    };
};

// foreachを用いた例:リスト内の要素をすべてタイプ別で分ける
const testArray2=[];
const testArray3=[];
testArray.forEach(ary => {
    if (typeof ary === 'number'){
        testArray2.push(ary);
    };
    if (typeof ary === 'string'){
        testArray3.push(ary);
    };
});
console.log(testArray2, testArray3);

// whileを用いた例:合計が100以上になるまで5を足し続ける
let evenTotal = 0;
let dd = 0;
while(evenTotal < 100){
    evenTotal += 5;
    dd++ ;
}
console.log(even_total, "繰り返し回数:", dd);


// 課題: 配列メソッドを練習しましょう
// mapメソッドを使用してください　[]配列 [2, 4, 6, 8] を map メソッドで各要素に2を掛け、新しい配列を作成してコンソールに表示してください。
const list1 = [2, 4, 6, 8];
newList1 = [];
list1.map((item1) => {
    newList1.push(item1 * 2);
});
console.log(newList1);

// someメソッドを使用してください　配列 [2, 4, 6, 7] の中に奇数が含まれているかどうかを some メソッドを使って判定し、結果をコンソールに表示してください。
const list2 = [2, 4, 6, 7];
console.log(list2.some(item2 => item2 % 2 === 1));

// everyメソッドを使用してください　以下の配列から hasSubmitted がすべて true かどうかを every メソッドで判定し、結果をコンソールに表示してください
// [{ id: 2, hasSubmitted: true },{ id: 3, hasSubmitted: false },{ id: 4, hasSubmitted: true },]
const list3 = [{ id: 2, hasSubmitted: true },{ id: 3, hasSubmitted: false },{ id: 4, hasSubmitted: true },];
console.log(list3.every((item3) => item3.hasSubmitted));

// filterメソッドを使用してください　以下の配列から hasSubmitted が true のものだけを抜き出し、新しい配列を作成してコンソールに表示してください
const list4 = [{ id: 2, hasSubmitted: true },{ id: 3, hasSubmitted: false },{ id: 4, hasSubmitted: true },]
const filterdList4 = list4.filter((item4) => item4.hasSubmitted);
console.log(filterdList4);

// sortメソッドを使用してください　以下の配列を id の昇順に並べ替え、コンソールに表示してください:
const list5 = [{ id: 323, hasSubmitted: true },{ id: 111, hasSubmitted: false },{ id: 268, hasSubmitted: true },];
const sortedList5 = list5.sort((a, b) => a.id - b.id);
console.log(sortedList5);