<template>
  <div>
    <Supplier
      :key="supplier.id"
      v-for="supplier in suppliers"
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
    ></Supplier>
  </div>
</template>

<script>
import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from 'timeago.js';
export default {
  name: "SuppliersList",
  components: { Supplier },
  data: function() {
    return {
      suppliers: [
        {
          id: 1,
          name: "Jean Claude",
         status: true,
          checkedAt: format(Date.now() - 11 * 1000 * 60 * 60)
        },
        {
          id: 2,
          name: "Marcel",
          status: false,
          checkedAt: format(Date.now() - 11 * 1000 * 60 * 60)
        },
          {
          id: 3,
          name: "Tantine valosh",
         status: true,
          checkedAt: format(Date.now() - 11 * 1000 * 60 * 60)
        },
          {
          id: 4,
          name: "Nanard",
         status: false,
          checkedAt: format(Date.now() - 11 * 1000 * 60 * 60)
        }
      ]
    };
  }
};
</script>