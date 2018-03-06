import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/index'
import VueResource from 'vue-resource'
import DetailPage from '@/pages/detail'
import DetailAnaPage from '@/pages/detail/analysis'
import Count from '@/pages/detail/count'
import Forecast from '@/pages/detail/forecast'
import Publish from '@/pages/detail/publish'


Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode:'history',
  routes: [
    {
      path:"/",
      component:IndexPage
    },
    {
    	path:"/detail",
    	component: DetailPage,
    	redirect:'/detail/analysis',
    	children:[
    	{
    		path:'analysis',
    		component:DetailAnaPage
    	},
    	{
    		path:'count',
    		component: Count
    	},
    		{
    		path:'forecast',
    		component: Forecast
    	},
    		{
    		path:'publish',
    		component: Publish
    	}
    	]
    }

  ]
})
