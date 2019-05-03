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

const axios = require("axios");

axios({
  method:'get',
  url:'https://api-suppliers.herokuapp.com/api/suppliers',

})
  .then(function(response) {
 console.log(response.data)
});

import Supplier from "./Supplier.vue";
import { format, render, cancel, register } from "timeago.js";
export default {
  name: "SuppliersList",
  components: { Supplier },
  data: function() {
    return {
      suppliers: [
        /*
        {
          id: 1,
          name: "Jean Claude",
          status: true,
          checkedAt: format(Date.now() - 10 * 1000 * 60 * 60)
        },
        {
          id: 2,
          name: "Marcel",
          status: false,
          checkedAt: format(Date.now() - 24 * 2000 * 60 * 60)
        },
        {
          id: 3,
          name: "Tantine valosh",
          status: true,
          checkedAt: format(Date.now() - 1 * 1000 * 60 * 60)
        },
        {
          id: 4,
          name: "Nanard",
          status: false,
          checkedAt: format(Date.now() - 11 * 1000 * 60 * 60)
        },
        {
          id: 5,
          name: "Tomtom",
          status: false,
          checkedAt: format(Date.now() - 34 * 1000 * 60 * 60)
        }*/
      ],
      loading: false,
      error: null
    };
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