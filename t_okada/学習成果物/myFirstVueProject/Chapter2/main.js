var app = new Vue({
	el: '#app',
	data:{
		message: {
			value: "hello Vue.js"
		},
		list:["りんご","ばなな","ぶどう"],
		num: 0,
		alreadyEnteredText: "already",
		scroll: 100,
		count: 0,
		item: {
			id: 1,
			// src: "item1.jpg",
			alt: "商品サムネイル",
			width:200,
			height:200
		},
		isChild: false,
		isActive: true,
		textColor: "red",
		bgColor: "lightGray",
		classObject:{
			child: true,
			'is-active': false
		},
		styleObject:{
			color: 'red',
			backgroundColor: 'lightGray'  
		},
		radius: 50,
		ok: false,
		type: "B",
		enemyList:[
			{id: 1, name: "スライム", hp:100},
			{id: 2, name: "ゴブリン", hp:200},
			{id: 3, name: "ドラゴン", hp:500}
		]
	},

	//Vueオブジェクトのプロパティ名が黄色くなる部分はライフサイクルフック。今回はCreatedを使用してみた。
	created: function() {
		//このインスタンスが生成された時に行いたい処理を書く
		console.log("created");
	},

	methods: {
		changheMessageValue: function(){
			this.message.value = "SSSS";
		},
		increment: function(){
			this.count++;
			this.isChild =! this.isChild;
		}
	}
});
