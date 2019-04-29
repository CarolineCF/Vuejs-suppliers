<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SuppliersList msg="Liste des fournisseurs"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SuppliersList,
    
  },
  methods: {
    onSuppliersListClick(){
      window.alert("User click on");
    },
    onMapClick(){
      window.alert("User click on");
    }
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
  margin-top: 60px;
}
</style>
