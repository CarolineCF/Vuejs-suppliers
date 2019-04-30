<template>
  <div id="app" class="container">
    <div>
      <img alt="Vue logo" src="./assets/spiruline-bio.jpg">
    </div>
    <div class="row">
      <div class="mx-auto">
        <router-link to="/supplist" class="btn btn-info">Go to list</router-link>

        <router-link to="/suppmap" class="btn btn-info">Go to map</router-link>

        <router-link to="/supp" class="btn btn-info">Go to supplier</router-link>
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
