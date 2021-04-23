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
		tuyoiColor: "red",
		tuyoiBackgroundColor: 'blue',
		radius: 50,
		ok: true,
		type: "B",
		newMonstorName:"",
		enemyList:[
			{id: 1, name: "スライム", hp:100},
			{id: 2, name: "ゴブリン", hp:200},
			{id: 3, name: "ドラゴン", hp:500}
		],
		enemyList2:[
			{id: 1, name: "すらいむ", hp:100},
			{id: 2, name: "ごぶりん", hp:200},
			{id: 3, name: "どらごん", hp:500}
		]
	},

	//Vueオブジェクトのプロパティ名が黄色くなる部分はライフサイクルフック。今回はCreatedを使用してみた。
	//ライフサイクルフックは、プログラムが実行されるタイミングを指定して、そのタイミングで処理を行うこと。
	//今回のCreatedは、Vueインスタンスが生成される時に実行されるメソッドを定義する。
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
		},
		doAdd: function(){
			if(this.newMonstorName == ""){
				console.log("モンスターの名前を入力してください");
				return;
			}
			var Max = this.enemyList2.length;
			this.enemyList2.push({
				id:Max+1,
				name:this.newMonstorName,
				hp:300
			});
		}
	}
});
