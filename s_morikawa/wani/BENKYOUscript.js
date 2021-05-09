// console.log("hello");

// const age = 24
// if (age === 24) {
//     console.log ("私は24歳です")
// }else{
//     console.log("私は24歳ではありません")
// }
// const pei =function(){
//     console.log ("私の名前は")
//     console.log ("最強卍Vtuberです")
// }
// pei();

// //第一引数に苗字、第二引数に年齢を入力する関数を作成して
// //コンソールに「私の名前は森川です。年齢は24さいです。」と表示する
// //ただし、年齢は数値を使用すること

// function profile (name,age){
//     console.log ("私の名前は"+name+"です。年齢は"+age+"歳です");
// }
// profile(森川,24);

// /* const sum =function (num1,num2){
//     const resultNum = num1+ num2;
//     console.log (resultNum);
// }

// sum(1,2);

//  */
 
//  /* function sum (num1,num2){
//  const resultNum = num1 + num2;
//  console.log (resultNum);
//  }
//  sum(1,3);
 
//  function name (firstname,lastname){
//  const resultname = firstname +lastname;
//  console.log("私の名前は" + resultname + "です");
//  }
//  name("森川","駿平"); */
 
// /* function profile (name,age){
//     console.log ("私の名前は"+name+"です。年齢は"+age+"歳です");
// }
// profile("森川",24); */

// //どの歯を選択したかを引数として結果をコンソールに出力。ただしはずれの歯は5番とする
// function judogeResult (judogeTooth){
//     if(judogeTooth === 5){
//     console.log("OUT");
//     }else{
//     console.log("SAFE");
//     }
//     }
//     judogeResult(5)

//     /* const sum =function (num1,num2){
//     const resultNum = num1+ num2;
//     console.log (resultNum);
// }

// sum(1,2);

//  */
 
//  /* function sum (num1,num2){
//  const resultNum = num1 + num2;
//  console.log (resultNum);
//  }
//  sum(1,3);
 
//  function name (firstname,lastname){
//  const resultname = firstname +lastname;
//  console.log("私の名前は" + resultname + "です");
//  }
//  name("森川","駿平"); */
 
// /* function profile (name,age){
//     console.log ("私の名前は"+name+"です。年齢は"+age+"歳です");
// }
// profile("森川",24); */

// //どの歯を選択したかを引数として結果をコンソールに出力。ただしはずれの歯は5番とする
// /* function judogeResult (judogeTooth){
// if(judogeTooth === 5){
// console.log("OUT");
// }else{
// console.log("SAFE");
// }
// }
// judogeResult(5)
//  */
 
//  //eadgbe
//  /* 
//  function guiterScale (string6,string5,string4,string3,string2,string1){
//  if(string6 === "E" && string5 === "B" && string4 === "D" && string3 === "G" && string2 === "B" && string1 === "E"){
//  console.log ("〇");
//  }else{
//  console.log("×");
//  }
//  }
//  guiterScale("E","A","D","G","B","E",)
//   */
// //  function guiterScale(string6, string5, string4, string3, string2, string1, tuningType){
// //     const normalCorrect = "EADGBE";
// //     const hurfDownCorrect = "AAAAAA";
// //     const dropDCorrect = "BBBBBB";
// //     const userTone = string6 + string5 + string4 + string3 + string2 + string1;
  
// //     if(tuningType == "normal"){
// //         if (normalCorrect === userTone) {
// //           console.log("〇");
// //         }else{
// //           console.log("×");
// //         }
// //     }else if(tuningType === "hurfDown"){
// //         if(hurfDownCorrect === userTone){
// //           console.log("〇");
// //         }else{
// //           console.log("×");
// //       }
// //     }else if(tuningType === "dropD"){
// //         if(dropDCorrect === userTone) {
// //             console.log("〇");
// //            }else {
// //           console.log("×");
// //         }
// //     }else{
// //     console.log("サポートしていません")
// //     }
// //   }
  
// //   guiterScale("B", "B", "B", "B", "B", "B","dropD");



// //りんごジュースしか買えない、かつ、ぴったりの金額でないと買えない関数と、
// //買ったりんごジュースを飲む関数を作ってください。
// //リンゴジュースを飲んだ場合は、うまい
// //それ以外を飲んだ場合は、りんご飲みたい
// //とコンソールに出力してください。

// function zihanki (money,product){
// 	if(money === 100 && product === "リンゴジュース"){
//  		return "青森産バカ馬リンゴジュース";
// 	}else{
//   	return "品切れ中です";
//   }
// }

// function drinkJuice(juice){
// 	if(juice === "青森産バカ馬リンゴジュース"){
//   	console.log("うまい");
//   }else{
//   	console.log("リンゴ飲みたい");
//   }
// }

// /* let thistimejuice = zihanki(100,"リンゴジュース"); */
// drinkJuice(zihanki(100,"リンゴジュース"));

// //課題
// //たこやきマシン

// /* 引数に、材料を渡す。

// たこ、こな、きゃべつ、みず

// 第一引数から第四引数まで、それぞれに食材を渡して上記４つの食材以外の食材が一つでも混じっていた場合、
// たこ焼きはつくれませんと、コンソールに出力。全ての食材が正しい場合は、おいしいって出力 */
// for(let i = 0; i < 10; i++){
//     console.log("i = " + i);
//     }
    
//     //for文を使って
//     //・
//     //・・
//     //・・・
//     //・・・・
//     //・・・・・
//     //上記をコンソールに出力してください
    
//     let dot = ""
    
//     for(let i = 0; i < 5; i++){
//     dot = dot + "・"
//       console.log(dot)
//     }
    
//     let num = 0;
//     console.log(num);
//     //0
    
//     num = num + 1;
//     console.log(num);
//     //1
    
//     num = num + 1;
//     console.log(num);
//     //2
    
//     for(let i = 0; i < 5; i++){
//     for(let n = 0; n < 5; n++){
//       console.log(i + "," + n);
//       }
//     }
    
//        //任意の整数指定して、
//    //1からその値までの総和を計算してコンソールに表示する。
//    //ただし、0以下の値を入力した場合は0と表示する。
   
//    //例.1
//    //任意の整数=3
//    //結果:6
   
//    //例.2
//    //任意の整数=4
//    //結果:10
   
//    //例.3
//    //任意の整数=0
//    //結果:0

// let g = 0;
// let f = 0;
// let total = 0;
// let gAbe = 0;

// const testPoint = [[13,15,27,64,85,7],[14,12,89,77,82,48]];
//  for(let i = 0; i < testPoint[0].length; i++){
//     let abe = 0;
//     abe = (testPoint[0][i] + testPoint[1][i]) / 2

//     if(abe => 60){
//       g = g + 1;
//       total = total + abe;
//     }else{
//       f = f + 1
//     }
//  }
//  gabe = total / g;

//  console.log(gabe)

    const ClassMember = [["おかだ","もりかわ","たけうち","やまも","かねこ","しぶや"],["たかき","ぺい","かりん","ももか","ともや","とし"]];
    /* console.log(ClassMember);
    console.log(ClassMember[0][0]);
    
    console.log(ClassMember[3]);
    console.log(ClassMember.length); */
    //6
    
     for(let i = 0; i < ClassMember.length; i++){
      console.log((i+1)+"番"+ ClassMember[i]);
    } 
    
    for(let i = 0; i < ClassMember.length; i++){
    for(let n = 0; n < ClassMember[i].length; n++){
      if(i === 0){
        console.log("A組の"+ClassMember[i][n]);
        }else if(i === 1){
        console.log("B組の"+ClassMember[i][n]);
        }
      }
    }


//     let thisTimeNum = 3
// let num = 3
// let num2 = 6
// for (let i = 0; i < thisTimeNum; i++) {
//   num = 1 + i
// 	num2 = num2 + num
// }
// console.log(num2)


// function sumx(num){
// 	let sumNum = 0;
//   let thisTimeNum = num;
// 	for(let i = 0; i < num; i++){
//   	sumNum = sumNum + thisTimeNum;
//     thisTimeNum = thisTimeNum - 1;
//   }
//   console.log(sumNum);
// }

// sumx(4);

   
   //func0, func1. func2,

/* 
let n = func0 ();

console.log("func0の結果は" + n + "です");
n = func1 (3,3);
console.log("func1の結果は" + n + "です");
n = func2 (3,3);
console.log("func2の結果aは" + n + "です");
n = func2 (3,4);
console.log("func2の結果bは" + n + "です");

//関数func0を定義
function func0 (){
  return 31;
}
//関数func1を定義
function func1 (a,b){
let	value = (a + b);
  return value;
}
//関数func2を定義
function func2 (a,b){
let	value = (a * b);
  return value;
} */

//任意の変数に分を入れてそれを秒に直すプログラム
// let thisTimeMinutes = 0;

// function convertSeconds(minutes) {
//   let seconds = minutes * 60;
//   console.log(seconds + "秒");
// }
// convertSeconds(thisTimeMinutes);

//任意の秒(seconds)数を分(minutes)に直すシステムを作る。ぴったり分の場合は、～分と出力。秒が余った場合は～分～秒と出力。
// let thisTimeSeconds = 60;

// function convertMinutes(seconds) {
//   let surplusSeconds = seconds % 60;
//   let minutes = ((seconds - surplusSeconds) / 60);
//   //秒を分に直す。
//   if (surplusSeconds === 0) {
//     console.log(minutes + "分");
//   } else if (surplusSeconds > 0) {
//     console.log(minutes + "分" + surplusSeconds + "秒")
//   }
// }
// convertMinutes(thisTimeSeconds);

//生成した乱数を変数「random」に代入する
// var random = Math.random();
// console.log( random );

// Math.random() * ( 最大値 - 最小値 ) + 最小値;
// 具体的なサンプル例として、「5 〜 10」の範囲で乱数を作ってみましょう！

// //最小値「5」と最大値から最小値を引いた「6」を使う
// var random = Math.floor( Math.random() * 6 ) + 5;
 
// let random = Math.floor(Math.random() * 10 + 1);

// function judgeTooth (tooth){
// 	if(tooth === randam){
//     console.log("OUT")
//     .disabled = true;
//   }else{
//     console.log("SAFE")
//   }
// }

