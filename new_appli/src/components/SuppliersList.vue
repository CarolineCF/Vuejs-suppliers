<template>
<div>
    <h1>Liste des fournisseurs</h1>
    <Supplier></Supplier>
   

</div>
</template>

<script>
import Supplier from './Supplier.vue'
export default {
  name: 'SuppliersList',
  components: {Supplier},
  props: {
      name: 'Jean claude',
      status: false,
       checkedAt: new Date(),
    msg: String
  }
}
</script>