import Home from '../pages/Home'
import Introduction from '../pages/Introduction'
import Members from '../pages/Members'
import Records from '../pages/Records'
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
  // 球队介绍
    path: '/introduction',
    component: Introduction
  }, {
  // 球队成员主页
    path: '/members',
    component: Members
  }, {
  // 战绩记录
    path: '/records',
    component: Records
  }]
}
