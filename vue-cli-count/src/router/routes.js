import Count from '../components/Count.vue'
import Test from '../components/Test.vue'
import Bind from '../components/Bind.vue'
import NavSwitch from '../components/navswitch.vue'
import TotalPrice from '../components/total.vue'
export default[
  {
    path:'/',
    redirect:'/Count'
  },
  {
    path: '/Count',
    name: 'Count',
    component: Count,

  },
  {
    path: '/bind',
    name: 'bind',
    component:Bind,

  },
  {
    path: '/navswitch',
    name: 'navswitch',
    component:NavSwitch,

  },
  {
    path: '/totalprice',
    name: 'totalprice',
    component:TotalPrice,

  },
  {
    path: '/test',
    name: 'test',
    component: Test,

  }
]
