// import Vue from 'vue'   //引入Vue
import {
	createRouter,
	createWebHashHistory
} from 'vue-router' //引入vue-router
// Vue.use(Router)  //Vue全局使用Router
 
import home from '../views/home.vue'
import login from '../views/login.vue'
 
 
const routes = [
	{
		path: '',
		redirect: "home"
	},
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			title: '登录'
		}
	},
	{
		path: '/home',
		name: 'home',
		component: home,
		meta: {
			title: '首页'
		}
	}
];
 
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
/* router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		next();
	} else {
		let token = localStorage.getItem('Authorization');
		if (token === null || token === '') {
			next('/login');
		} else {
			next();
		}
	}
}); */
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
export default router;