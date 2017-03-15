<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <bottombar></bottombar>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import BottomBar from './components/BottomBar'

export default {
  name: 'app',
  components: {
    'navbar': NavigationBar,
    'bottombar': BottomBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
