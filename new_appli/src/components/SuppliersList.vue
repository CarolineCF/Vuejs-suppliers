<template>
  <div>
    <div>
      <div class="row av">
        <div class="mx-auto">
          <section v-if="errored">
            <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
          </section>
          <section v-else>
            <div v-if="loading"></div>
          </section>
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
import Vuex from "vuex";
export default {
  name: "SuppliersList",
  components: { Supplier },

  computed: Vuex.mapState(["suppliers", "loading"]),
  mounted() {
    this.$store.dispatch("loadData");
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