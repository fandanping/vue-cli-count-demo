import Count from '../components/Count.vue'

export default[
  {
    path:'/',
    redirect:'/Count'
  },
  {
    path: '/Count',
    name: 'Count',
    component: Count,

  }
]
