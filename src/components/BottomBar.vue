<template>
  <nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
      <div>{{slogan.ch}}</div>
      <div>{{slogan.en}}</div>
      <footer>
        <div id="copyright">@Copyright {{slogan.en}}</div>
      </footer>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'bottombar',
  data () {
    return {
      slogan: {
        ch: '我在中大，混碗饭吃',
        en: 'Hello World Football Club'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$hwfc-blue: #39F;
.navbar {
  background-color: #fff;
  border: 0;
}
.container {
  margin: 0;
  padding: 0;
  width: 100%;
}
.container > div {
  color: $hwfc-blue;
  font-weight: bold;
}

.container div:nth-child(1) {
  font-size: 75px;
}
.container div:nth-child(2) {
  font-size: 50px;
  margin-bottom: 20px;
}

footer {
  height: 25px;
  background-color: $hwfc-blue;
}

#copyright {
  font-size: 20px;
  float: left;
  margin-left: 10px;
}
</style>
