Vue.component('CompletedToDos', {
  data: function () {
    return {
			todos: [],
			disabled: false
    }		
  },
	methods:{
		deleteAll(){
			localStorage.clear()
			this.disabled = true
			setTimeout(()=>{this.disabled = false}, 1000)
			this.todos = []
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
		<ul class="todo-list">
			<h3 class="todo-title">Completed tasks</h3>
			<li v-for="todo in todos" class="todo-item":class="{ completed_: todo.completed }" :style="todo.completed ? 'display: block' : 'display: none'">
				<input type="checkbox" class="todo-checkbox" v-model="todo.completed">
				{{ todo.text }}
			</li>
		</ul>
		<button class="button-delete" @click="deleteAll()" :disabled="disabled"><ion-icon name="trash-outline" style="margin-right: 5px"></ion-icon> </button>
		<p style="color: #E53935; font-size: 1.1em">Including To Do!</p>
	</div>
	`
})

const CompletedToDos = {
	template:`
		<CompletedToDos />
	`
}