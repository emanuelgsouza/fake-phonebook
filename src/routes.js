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
    path: '*',
    redirect: '/home'
  }
]
