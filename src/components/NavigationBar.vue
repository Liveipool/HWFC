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
      <ul class="nav navbar-nav navbar-right" @click="changeLinkBgColor">
        <!-- 使用active来高亮选择的链接 -->
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/introduction">球队介绍</router-link>
        </li>
        <li>
          <router-link to="/members">球队成员</router-link>
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
      brand: 'HWFC'
    }
  },
  mounted () {
    // 改变初始的被激活链接元素
    let initActivedItem = document.querySelector('.router-link-active:not(.navbar-brand)').parentNode
    initActivedItem.classList.add('active')
  },
  computed: {
    // 保存所有的链接元素
    items: () => document.querySelectorAll('ul.navbar-right > li')
  },
  methods: {
    // 改变被激活的链接元素样式
    changeLinkBgColor (event) {
      let activedItem = event.target.parentNode
      activedItem.classList.add('active')
      this.items.forEach((item) => {
        if (item !== activedItem) item.classList.remove('active')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* navigation-bar style setting*/
/* variables */
/* navigation-bar color */
$top-color: #086ed5;
$bottom-color: #055db5;
$active-bg-color: #044e97;
$active-font-color: #fff;
$height: 50px;
#navigation {
  background: -webkit-linear-gradient(top, $top-color, $bottom-color);
  background: linear-gradient(to bottom, $top-color, $bottom-color);
  border: 0;
  border-bottom: 1px solid $active-bg-color;
  box-shadow: 0 1px 2px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.15);
}
#navigation .navbar-brand {
  color: $active-font-color;
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
