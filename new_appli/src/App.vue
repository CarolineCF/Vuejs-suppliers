<template background="bgimage.jpg">
  <div id="app" class="container">
    <div>
      <img class="img-fluid" alt="Vue logo" src="./assets/capsverde.png">
    </div>
    <div class="row">
      <div class="mx-auto">
        <router-link to="/supplist" class="btn btn-info">LIST OF PROVIDERS</router-link>

        <router-link to="/suppmap" class="btn btn-info">MAP</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
