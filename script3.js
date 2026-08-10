// 1.JSON文字列をJavaScriptオブジェクトに変換しましょう　以下のJSON文字列をJavaScriptで使用できるオブジェクトに変換し、コンソールに表示してください:
// '{"name":"Taro", "age":42, "gender": "male"}' JSON.parse() メソッドを使用します
const json = '{"name":"Taro", "age":42, "gender": "male"}'
const obj = JSON.parse(json);
console.log(obj.name, obj.age, obj.gender);

// 2.JavaScriptオブジェクトをJSON文字列に変換しましょう 以下のJavaScriptオブジェクトをJSON形式に変換し、コンソールに表示してください:
//{ name: "Taro", Age: 13, gender: "male" }  JSON.stringify() メソッドを使用します
const obj2 = { name: "Taro", Age: 13, gender: "male" };
const json2 = JSON.stringify(obj2);
console.log(json2);

// フォームバリデーションを実装しましょう 以下の各項目に対して、指定された条件を満たさない場合、エラーメッセージを表示するバリデーションを実装してください。
// 【準備】HTMLをベースにして、JavaScriptを記述してください。「送信」ボタンを押したときに、
// 各項目のチェックを行い、エラーがあれば該当する <p class="error"> の中にエラーメッセージを表示するようにしてください。
const btn = document.getElementById("btn");
const error = document.getElementById("error");
const text = document.querySelectorAll("text");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

btn = addEventListener("click", () => {
    if (nameInput === " "){ //名前が未入力の場合
        const nameError = document.getElementById("nameError");
        nameError.textContent("正しい名前を入力してください");
        nameError.appendChild(nameError);
    }
    else if ()//全角文字以外が含まれている場合
    //年齢が未入力の場合
    //数値以外が入力された場合
    "正しい年齢を入力してください"

    //メアド未入力の場合
    //@が含まれていない場合
    //全角文字が含まれている場合
    //フォーマットが○○@○○.○○でない場合
    "正しいメアドを入力してください"

    //電話番号が未入力の場合
    //桁数が11桁以外の場合
    //数値以外が含まれている場合
    "正しい電話番号を入力してください"

});