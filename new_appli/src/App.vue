<template>
  
  <div>
    

     
        <router-link to="/supplist" class="btn btn-success">PROVIDERS</router-link> 

        <router-link to="/suppmap" class="btn btn-success ml-2">MAP</router-link>
  


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
.background {
  background:  center/100% url("./assets/background-verde.png");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
