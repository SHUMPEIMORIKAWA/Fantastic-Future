'use strict';
{                                                               
    $('.hand').on('click',function(event){                      
        event.preventDefault();
        const enemyHand = Math.floor(Math.random() * 3);        //0~2のランダムな数を生成してenemyHandに代入
        console.log(enemyHand);                                 //0=グー　1=チョキ  2=パー

        const myHand = Number(event.currentTarget.value);       //各ボタンに割り振ったvalueを取得して数値に変換
        console.log(myHand);
        let respar = "";                                                                        
        //setInterval mean 〇秒おきにこの処理を行う(今回は一回した後にクリアしてる)※今回はなぜかalertが先に出た為遅らせた
        if(enemyHand === 0){
            $('#bigimg').attr('src','images/janken_gu.png')
            if(myHand === 2){
                respar = "win";
            }else if(myHand === 1){
                respar = "lose";
            }else{
                respar = "drow";
            }
        }else if(enemyHand === 1){
            $('#bigimg').attr('src','images/janken_choki.png')
            if(myHand === 0){
                respar = "win";
            }else if(myHand === 2){
                respar = "lose";
            }else{
                respar = "drow";
            }
        }else if(enemyHand === 2){
            $('#bigimg').attr('src','images/janken_pa.png')
            if(myHand === 1){
                respar = "win";
            }else if(myHand === 0){
                respar = "lose";
            }else{
                respar = "drow";
            }
        }
        result(respar);
    });
    
    function result(res){
        const intervalId = setInterval(function(){
            if(res === "win"){
                alert('勝ち！');
            }else if(res === "lose"){
                alert('負け！');
            }else if(res === "drow"){
                alert('引き分け！');
            }
            $('#bigimg').attr('src','images/mark_question.png')
            clearInterval(intervalId);
        },200);
    }
}
