{

    $('.hand').on('click', function(event) {                           //入室を押したとき
        let myHand = "";
        let enemyHand = "";
        let result = 0;

        myHand = event.currentTarget.id

        const ranNum = randRange(0, 2);//相手の手をランダムで決める。0:rock（グー）,1:scissors（チョキ）,2:paper（パー）,
        console.log(ranNum);

        if(ranNum === 0){
            enemyHand = "rock";
        }else if(ranNum === 1){
            enemyHand = "scissors";
        }else if(ranNum === 2){
            enemyHand = "paper";
        }

        result = judgeResult(myHand,enemyHand);//結果の判定。0:勝ち,1:負け,2:あいこ,

        $("#myHand").text("自分の手:"+myHand);
        $("#enemyHand").text("相手の手:"+enemyHand);

        if(result === 0){//勝ちの時の表示
            $("#result").text("あなたの勝ちです");
        }else if(result === 1){//負けの時の表示
            $("#result").text("あなたの負けです");
        }else if(result === 2){//あいこの時の表示
            $("#result").text("あいこです");
        }
    });

    const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    function judgeResult(players,enemys){
        if(players === "rock"){
            if(enemys === "rock"){
                return 2;
            }else if(enemys === "scissors"){
                return 0;
            }else if(enemys === "paper"){
                return 1;
            }
        }else if(players === "scissors"){
            if(enemys === "rock"){
                return 1;
            }else if(enemys === "scissors"){
                return 2;
            }else if(enemys === "paper"){
                return 0;
            }
        }else if(players === "paper"){
            if(enemys === "rock"){
                return 0;
            }else if(enemys === "scissors"){
                return 1;
            }else if(enemys === "paper"){
                return 2;
            }
        }
    }
}