'use strict';

{
    // 日時を整形するファンクション
    const beautifulTime = function(time) {
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();
        const hour = time.getHours();
        const minute = twoDigit(time.getMinutes());
        const second = twoDigit(time.getSeconds());
        const timeString = `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;
        return timeString;
    }

    // 2桁にするファンクション
    const twoDigit = function(num) {
        if(num < 10) {
            return '0' + num;                                           //パーツを作るときは「return」が必要
        } else {
            return num;
        }
    }

    let times = [];                                                     //配列timesを定義
    // 入室ボタン
    $('#enter').on('click', function(event) {                           //入室を押したとき
        event.preventDefault();                                         
        //const now = new Date();                                                   
        times = [];                                                     //配列の中身を空にする
        times.push(new Date());                                         //配列timesに現在時刻を追加する
        $('#enter-time').text(beautifulTime(times[0]));                 //入室時間に配列の0番目の時間を代入
        $('#exit-time').text('');                                       //退出時間を空に
        $('#enter-exit').text('')                                       //利用時間を空に
    });

    // 退室ボタン
    $('#exit').on('click', function(event) {                            //退出ボタンを押したとき
        event.preventDefault();
        //const now = new Date();
        //すでに入室時間が入力されている場合だけ処理
        if(times.length === 1){                                         //もし配列のレングスが1だった時
            times.push(new Date());                                     //配列に現在時刻を追加する
            $('#exit-time').text(beautifulTime(times[1]));              //退出時間に配列の1番目の時間を代入
        
            //経過時間を計算
            const enterToExit = times[1] - times[0];                    //入室-退室時間を行う。
            const minute = Math.ceil(enterToExit / 1000 / 60);          //配列内の計算はミリ秒の数値(1cm=10m 1m=1000mm)ため、
            const result = `約${minute}分`;                             //1000割って60割って分に直す。それをリザルトに文字列として代入

            $('#enter-exit').text(result);                              //利用時間にリザルトを表示
        }
    });
}
