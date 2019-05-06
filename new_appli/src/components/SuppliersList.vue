<template>
  <div>
    <div>
      <div class="row av">
        <div class="mx-auto">
          <Supplier
            class="test"
            :key="supplier.id"
            v-for="supplier in suppliers"
            :name="supplier.name"
            :status="supplier.status"
            :checkedAt="supplier.checkedAt"
          ></Supplier>
        </div>
      </div>

      <vue-particles
        class="trans"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from "timeago.js";

export default {
  name: "SuppliersList",
  components: { Supplier },
  data: function() {
    return {
      suppliers: [],
      loading: false,
      error: null
    };
  },
  mounted() {
    axios
      .get("https://api-suppliers.herokuapp.com/api/suppliers")
      .then(response => {
        this.suppliers = response.data;
      });
  }
};
</script>
<style scoped>
.av {
  display: block;
  width: 100%;
  z-index: 999;
  position: absolute;
}
.test {
  margin: auto;
}
</style>