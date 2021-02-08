Vue.component('app-navbar', {
  data: function () {
    return {

    }		
  },
	methods:{
		
	},
  template: `
	<p class="navbar">
		<router-link to="/" class="navbar-item">To Do</router-link>
		<router-link to="/completed" class="navbar-item">Completeds</router-link>
	</p>
	`
})

