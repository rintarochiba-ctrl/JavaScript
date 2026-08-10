// DOM操作を練習してみよう
// 1.IDを使ってDOMを取得しましょう.document.getElementById を使って任意のIDを持つ要素を取得してください。
const button = document.getElementById("myButton");

// 2.セレクターを使ってDOMを取得しましょう.document.querySelector を使って任意のCSSセレクターで要素を取得してください。
const text = document.querySelector("p");

// 3.新しい要素を作成しましょう.document.createElement を使って <p> タグを作成してください。
const newP = document.createElement("p");

// 4.作成した要素を追加してみよう.1 で取得したDOMに、3で作成した <p> タグを子要素として追加してください。
button.appendChild(newP);

// イベントハンドリングの練習
// 1.ボタンにクリックイベントを付与しましょう.ボタンをクリックしたとき、コンソールに "click" と表示されるようにしてください。
button.addEventListener("click", () =>{
    console.log("click");
});

// 2.スクロールイベントを設定しましょう.ページがスクロールされたときにコンソールに "scroll" と表示されるようにしてください。
addEventListener("scroll", () => {
    console.log("scroll");
});

// 3.ボタンクリックで子要素を追加しましょう.ボタンをクリックすると、div (親要素) に新しい子要素が追加されるようにしてください。
// 子要素には任意のテキスト（例: "子要素が追加されました！") を表示してください。
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click" , () => {
    const child = document.createElement("p");
    child.textContent = "子要素が追加されました！";
    text.appendChild(child);
})
