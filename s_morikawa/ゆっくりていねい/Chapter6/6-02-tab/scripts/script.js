'use strict';

//$().addClass('追加するクラス');       = クラスを追加する
//$().removeClass('削除するクラス');    = クラスを削除する
//注:どのクラス名がどのタブについてるかを理解するのが今回大事
{
	$('.tab').on('click', function(event){                  //材料・調理方法についてるclass「tab」をクリックしたとき
        //関連するコンテンツを表示
        $('.tabbox').addClass('hide');                      //クリームチーズ～についてるクラス「tabbox」を全て見えなくする(classにhideを加えてcssで見えなくする)
        const pair = $(event.currentTarget).data('pair');   //date.pairは属性でクラス属性じゃないため、パスを通すために定数pairを作る

        $('#' + pair).removeClass('hide');                  //定数pairに#(クラス)をつけてパスを通し、hideを無くして見えるようにする

        //クリックしたタブをハイライトする
        $('.tab').removeClass('active');                    //.tabの中にあるactiveクラスを削除し、バックグラウンドの色を無くす
        $(event.currentTarget).addClass('active');          //今回クリックされたtabにクラスactiveを加えて、バックグラウンドの色を表示
    });
}