// Javascript課題1

// 変数を宣言してみよう
// 文字列を格納する変数を宣言してください
// 1.文字列 "hoge" を const を使って変数に格納してください
const text1 = "hoge";

// 2.数値 69 を const を使って変数に格納してください。
const num1 = 69;

// 3.真偽値を格納する変数を宣言してください.真偽値 false を const を使って変数に格納してください。
const isOpen = false;

// 4.未定義の状態で変数を宣言してください.まだ値が入っていない変数を let を使って宣言してください。
let None = undefined;

// 5.null を格納する変数を宣言してください.null を const を使って変数に格納してください。
const empty = null;

// 6.文字列の配列を作ってみよう.以下の名前が含まれる配列を const を使って作成してください:"田中", "佐藤", "久保田", "鈴木", "河本"
const list = ["田中","佐藤","久保田","鈴木","河本"];

// 7.オブジェクトを宣言してみよう.以下の内容を持つオブジェクトを作成してください:{id:1,na,e:"yourname",age:20}
const obj = {id:1,naae:"yourname",age:20};

// 8.作成した変数をコンソールに表示してくださいNo.1〜No.6 で作成した変数を console.log を使って順に表示してください。
console.log(text1,num1,isOpen,None,empty,list,obj);

// 関数を作ってみよう
// 1.関数を宣言してみよう.関数名だけつけて、中身が空の関数を作成してください。
function practice1() {
};

// 2.アロー関数を宣言してみよう.関数名だけつけて、中身が空のアロー関数を作成してください。
const practice2 = () => {
};

// 3.引数を受け取って表示する関数を作りましょう.引数に渡された値を console.log で表示する関数を作成してください。
const practice3 = (num1) => {
  console.log(num1);
}
practice3(9);

// 4.計算をする関数を作りましょう.2つの引数を受け取り、その和（足し算の結果）を返す関数を作成してください。
const practice4 = (num1,num2) => num1+num2;
console.log(practice4(2,3))

// 5.文字列を結合する関数を作りましょう.2つの文字列を引数として受け取り、それらを結合して返す関数を作成してください。
const practice5 = (text1,text2) => text1+text2 ;
console.log(practice5("Hello","World!"));