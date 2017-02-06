export default [
  {
    path: '/home',
    component: require('./app/Home')
  },
  {
    path: '/add',
    component: require('./app/Add')
  },
  {
    path: '/search',
    component: require('./app/Search')
  },
  {
    path: '*',
    redirect: '/home'
  }
]
