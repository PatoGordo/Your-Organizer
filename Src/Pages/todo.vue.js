Vue.component('ToDos', {
  data: function () {
    return {
			newTodo: '',
			returnMessage: 'Enter your task name in the input field and press Enter.',
			returnMessageClass: 'warn',
    	todos: []
    }
  },
	methods:{
		addTodo() {
			if (this.newTodo != ''){
				this.todos.push({ text: this.newTodo, completed: false })
				this.newTodo = ''
				this.returnMessage = 'New task successfully added!'
				this.returnMessageClass = 'success'
				setTimeout(() => {
					this.returnMessage = 'Enter your task name in the input field and press Enter.'
					this.returnMessageClass = 'warn'
				}, 1500)
			}else{
				this.returnMessage = 'Please put a name on your task!!!'
				this.returnMessageClass = 'error'
				setTimeout(() => {
					this.returnMessage = 'Enter your task name in the input field and press Enter.'
					this.returnMessageClass = 'warn'
				}, 1500)
			}
    }
	},
	mounted() {
    if (localStorage.getItem('ToDos')) this.todos = JSON.parse(localStorage.getItem('ToDos'));
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('ToDos', JSON.stringify(this.todos));
      },
      deep: true
    }
  },
  template: `
	<div class="component todos">
		<p class="return-message":class="returnMessageClass">{{returnMessage}}</p>
		<label class="input-label">
			<input class="input-box field" placeholder="New item" v-model="newTodo" @keydown.enter="addTodo">
			<button class="input-box button" @click="addTodo"><ion-icon name="add-outline"></ion-icon></button>
		</label>
		<ul class="todo-list">
			<h3 class="todo-title">To Do</h3>
			<li v-for="todo in todos" class="todo-item":class="{ completed: todo.completed }" :style="todo.completed ? 'display: none' : 'display: block'">
				<input type="checkbox" class="todo-checkbox" v-model="todo.completed">
				{{ todo.text }}
			</li>
		</ul>
	</div>`
})

const ToDos = {
	template:`
		<ToDos />
	`
}