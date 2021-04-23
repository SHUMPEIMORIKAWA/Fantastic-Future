'use strict';

//セレクタ ＝ idやclassのこと。idの場合は('#tst')　classの場合は('.test')と#や.が必要。CSSと一緒
//$('セレクタ') = 要素の取得(document.get~の代わり)
//$('セレクタ').text('テキスト'); = 要素のコンテンツの書き換え 　$('セレクタ')で取得した要素のコンテンツがtext()内に書いた'テキスト'」に書き換わる
//$('#todo').append('<li>パンク修理</li>'); = 子要素の挿入
/* 
$('セレクタ').on('イベント名',function(){　　＝　$()メソッドで取得した要素にイベントを設定するとき[on]メソッドを使う
    //  イベントが発生した時の処理を記述
})　
*/
//$('セレクタ').atter('属性名','新しい値');　＝　タグ属性の書き換え　<img>タグのsrc属性を書き換えるときなどに使う
{
	$('.thumb').on('click',function(event){                   //imgタグのクラス.thumbを押したときの関数を作る
        const newImg =$(event.currentTarget).data('image');   //押した画像を読み込むためのパスを作る
        $('#bigimg').attr('src',newImg);                      //imgタグのid bigimgを呼び出し、src属性をnewimgに書き換える
    });
}