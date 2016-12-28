import Home from '../pages/Home'
import Members from '../pages/Members'
import Introduction from '../pages/Introduction'
export default {
  // html5 mode (without # in url)
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
  // 主页的路径
  /* issue 以目前navigation-bar的实现方法来看，vue-router2.0存在bug */
    path: '/home',
    component: Home
  }, {
  // 球队成员主页
    path: '/members',
    component: Members
  }, {
  // 球队介绍
    path: '/introduction',
    component: Introduction
  }]
}
