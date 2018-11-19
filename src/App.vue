<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin:0;
  padding: 0;
  /* font-size: 10px; */
}
html,body{
  padding:0;
  margin:0;
}
ul{
  list-style: none;
}
p{
  padding:0;
  margin:0;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #673AB7;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>
