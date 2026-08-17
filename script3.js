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
const btn = document.getElementById("btn"); //ボダン情報の取得

const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

btn.addEventListener("click", () => {

    const nameInput = document.getElementById("nameInput");
    const ageInput = document.getElementById("ageInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");

    nameError.textContent = "";
    ageError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    const nameCheck = /^[^ -~｡-ﾟ]+$/;
    if (nameInput.value === "" || !nameCheck.test(nameInput.value)){ //名前が未入力または全角以外の場合
        nameError.textContent = "正しい名前を入力してください";
    };

    const ageCheck = /^\d+$/;
    if (ageInput.value === "" || !ageCheck.test(ageInput.value)){ //年齢が未入力の場合または半角数値以外が入力された場合
        ageError.textContent = "正しい年齢を入力してください";
    };

    const emailCheck = /^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i;
    if (emailInput.value === "" || !emailCheck.test(emailInput.value)){ //メアド未入力または＠が含まれないまたは全角文字が含まれるまたはフォーマットが○○@○○.○○でない場合
        emailError.textContent = "正しいメアドを入力してください";
    };

    const phoneCheck = /^\d{11}$/;
    if (phoneInput.value === "" || !phoneCheck.test(phoneInput.value)){ //電話番号が未入力または桁数11以外または数値以外が含まれている場合
        phoneError.textContent = "正しい電話番号を入力してください";
    };
});