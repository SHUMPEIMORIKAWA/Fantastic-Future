var app = new Vue({
	el: '#app',
	data:{
		message: 'こんぬづわ',
		list: ['りんご','ばなな','いちご'],
		handleClick: function(event){
			alert(event.target);
		},
		bindMessage: '初期メッセージ',
		show: true
	},
	
	computed:{
		computedMessage: function() {
			return this.message+"!"
		}
	},

	//Vueオブジェクトのプロパティ名が黄色くなる部分はライフサイクルフック。今回はCreatedを使用してみた。
	created: function() {
		//このインスタンスが生成された時に行いたい処理を書く
		console.log("created");
	}
	//methosdは次のチャプターで書く。
});
