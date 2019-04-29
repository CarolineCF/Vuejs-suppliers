<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/supplist">Go to list</router-link>
    <router-link to="/suppmap">Go to map</router-link>
    <router-link to="/supp">Go to supplier</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    onSuppliersListClick() {
      window.alert("User click on");
    },
    onMapClick() {
      window.alert("User click on");
    }
  }
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
