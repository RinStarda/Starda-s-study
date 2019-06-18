var app = new Vue({ //声明式渲染
	el: '#app',
	data: {
		massage:'Hello Vue!'
	}
});

var app2 = new Vue({
	el: '#app-2',
	data: {
		message: '页面加载于' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
		{ text : '学好数理统计，上山下海都不怕'},
		{ text : '人人都能有肉吃'},
		{ text : '走进深渊最基层'}
		]
	}
});

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello 冰塔'
	},
	methods: {
		reverseMessage:function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
});

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello 符华'
	}
});

// 定义名为todo-item的新组件
Vue.component('todo-item',{
	//todo-item组件现在接受一个
	//“prop”，类似于一个自定义特性
	//这个prop名为todo
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
		{ id:0, text:'蔬菜'},
		{ id:1, text:'奶酪'},
		{ id:2, text:'随便其它东西'}
		]
	}
})