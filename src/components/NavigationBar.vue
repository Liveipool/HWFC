<template>
  <nav class="navbar navbar-inverse no-radius" id="navigation" role="navigation">
    <div class="container">
      <ul class="nav navbar-nav">
        <li>
          <img class="logo" src="../assets/logo.png" alt="logo">
        </li>
        <li>
          <router-link class="navbar-brand" to="/">{{ brand }}</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <!-- 使用active来高亮选择的链接 -->
        <li v-for="nav in navs" :class="{ active: $route.path == nav.url }">
          <router-link :to="nav.url"> {{nav.description}} </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      brand: 'HWFC',
      navs: [{
        url: '/home',
        description: '首页'
      }, {
        url: '/introduction',
        description: '球队介绍'
      }, {
        url: '/members',
        description: '球队成员'
      }, {
        url: '/records',
        description: '战绩记录'
      }]
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* navigation-bar style setting*/
/* variables */
/* navigation-bar color */
$hwfc-blue: #39F;
$active-bg-color: #044e97;
$active-font-color: #fff;
$height: 50px;
#navigation {
  // 以后再比较是否渐进会更好看
  // background: -webkit-linear-gradient(top, $top-color, $bottom-color);
  // background: linear-gradient(to bottom, $top-color, $bottom-color);
  background-color: $hwfc-blue;
  border: 0;
  // border-bottom: 1px solid $active-bg-color;
  // box-shadow: 0 1px 2px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.15);
}
.container  {
  margin: 0;
  padding-right: 250px;
  width: 100%;
}
#navigation .navbar-brand {
  color: $active-font-color;
}
#navigation .navbar-right > li > a {
  color: #dcdcdc;
}

#navigation .navbar-nav > .active > a,
#navigation .navbar-nav > .active > a:hover,
#navigation .navbar-nav > .active > a:focus {
  color: $active-font-color;
  background-color: $active-bg-color;
}
.logo {
  margin-right: 10px;
  height: $height;
}
</style>
