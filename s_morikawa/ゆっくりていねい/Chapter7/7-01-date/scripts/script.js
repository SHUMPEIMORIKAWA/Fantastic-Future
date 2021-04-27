'use strict';

{
    //日時を整形するファンクション
    const beautifulTime = function(time){                                               //定数beautifulTimeにファンクションを代入
        const year = time.getFullYear();                                                //年
        const month = time.getMonth() + 1;                                              //月
        const date = time.getDate();                                                    //日
        const hour = time.getHours();                                                   //時
        const minute = twoDigit(time.getMinutes());                                     //分
        const second = twoDigit(time.getSeconds());                                     //秒　をそれぞれ定数に代入(分・秒には*1を行う)
        const timeString = `${year}年${month}月${date}日 ${hour}:${minute}:${second}`;      //timeString(str=文字列)に文字列を代入
        return timeString;                                                                 //返り値をtimeStirngにする
        }

        //数字を2桁にするファンクション*1(6を06とかで表示するため)
        const twoDigit = function(num){                                                 //定数twoDigit(和訳:2桁)にnum(引数)が10以下の時
            if(num < 10){                                                               //0+numと返し、それ以外そのままnumを返す処理
                return '0' + num;
            }else{
                return num;
            }
        }

    $('#enter').on('click', function(event){                                            //id名enterをクリックしたときのイベントを書く
        event.preventDefault();                                                             //デフォルト機能削除
        const now = new Date();                                                             //定数nowに現在時刻を代入
        $('#enter-time').text(beautifulTime(now));                                          //id名entertime(入室ボタン)をbeatifulTimeの文字列に書き換え
        $('#exit-time').text('')                                                            //id名exit-time(退室ボタン)を押したとき空文字列に書き換え
        
    });
    
    $('#exit').on('click', function(event){                                             //退室を押したときのイベント
        event.preventDefault();                                                         //上記と同文
        const now = new Date();
        $('#exit-time').text(beautifulTime(now));
    })
}