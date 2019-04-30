<template>
<div>
    <h1>Liste des fournisseurs</h1>
    <Supplier name=""></Supplier>
   

</div>
</template>

<script>
import Supplier from './Supplier.vue'
export default {
  name: 'SuppliersList',
  components: {Supplier},
  
}
</script>