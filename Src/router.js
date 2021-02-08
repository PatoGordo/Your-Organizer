const routes = [
	//set your routes here
  { path: '/', component: ToDos },
  { path: '/completed', component: CompletedToDos },

	
  { path: '*', component: Page404 }
]

const router = new VueRouter({
  routes
})
