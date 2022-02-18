import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの内容を取得
  const inputText = document.getElementById("add-text").value;
  //追加を押したら初期化
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  //生成したdivにクラスを設定
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  //liタグの文字を入力
  li.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //削除
    deleteFromIncompleteList(deleteButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // 親ノードからliのテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;
    //この下にliタグとボタンを生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了から削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //今やりたいことは、ulタグの下に
  //追加されたタスクのdivを追加する
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//clickイベントに対して以降の関数が動作
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

/**コメントアウト */
//const myName="rinta";
// var val1 = "var変数";
// console.log(val1);
// //var変数は上書き可能
// val1="上書き"
// console.log(val1);

// //var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

//comand + / で範囲コメントアウト

// let val2="let変数";
// console.log(val2);

// //letは上書きが可能
// val2="let変数を上書き"
// console.log(val2);

// //letは再宣言不可能
// let val2="something";

// const val3="const変数";
// console.log(val3);

// //const変数は上書き不可
// val3="const変数を上書き";
//read-onlyというエラーが出る

// //再宣言不可能も確認
// const val3="再宣言";

//オブジェクトの中身は変えることができる
//constで定義したオブジェクトはプロパティの変更可能
// const val5= ["dog","cat"];
// val5[0]="bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "rinta";
// const age = 22;

// console.log(`私の名前は${name}で年齢は${age}です`);

//従来の関数
// function func1(str){
//   return str;
// }

// console.log(func1("func1です"));

// const func1 = function (str){
//   return str;
// }
// console.log(func1("open"));
// //変数は()で括らなくても大丈夫
// const func2 = str => str;
// console.log(func2("funcです"));

// const add = (num1,num2)=>{
//   return num1+num2;
// }
// console.log(add(1,3));

/**
 * 分割代入
 */
// const myProfile = {
//   name : "rinta",
//   age : 22,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name , age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ["rinta" , 28];

// const message3 = `名前は${myProfile[0]}、年齢は${myProfile[1]}`;
// console.log(message3);

// const [name,age] = myProfile;
// console.log(`名前は${name},年齢は${age}`);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "名無し")=>{
//   console.log(`こんにちは${name}さん`);
// }

// sayHello(myName);

/**
 * スプレット構文 ...
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);
//...の後に配列を書くと、配列の中身が出力される

// const sumFunc=(num1,num2) => {
//   return console.log(num1+num2);
// }
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);
//要素が順番に入る。関数の引数に順番に入れたい時とかに使う？

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);
//配列をまとめて受け取るときにも有効

//配列のコピー、結合(Reactでもよく使う)
//配列をコピーすると参照を受け継いでしまうので...を使う
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6)

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ["田中","山田","rinta"];

// const newNameArr = nameArr.map((name) =>{
//   if (name === "rinta"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 === 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// //typeof がpythonでいうdtypeみたいなものか
// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 >100 ? "over 100" :"許容範囲";
// }
// console.log(checkSum(12,80));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */

// ||は左がfalseなら右を返す
// 確かにorの関数になっている。
// const num =100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2)

//参照
// const array1=[1,2,3];
// const array2=array1;
// array2[0]=100;
// console.log(array1);
