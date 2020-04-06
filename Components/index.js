/*
* @Author: ptzr777
* @Date:   2020-04-06 10:32:59
* @Last Modified by:   ptzr777
* @Last Modified time: 2020-04-06 17:04:07
*/

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
	el: '#app',
	data: {
		grocerylist: [        
			{id:0, text: 'coucou1'},
			{id:1, text: 'coucou2'},
			{id:2, text: 'coucou3'}
		]
	}
})