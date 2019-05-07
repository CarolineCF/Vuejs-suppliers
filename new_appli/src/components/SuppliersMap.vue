
<template>
  <div>
    <div>
      <div class="row av">
        <div class="mx-auto">
          <GmapMap
            class="test"
            v-bind:center="{lat:29.97421, lng:37.14871}"
            :zoom="5"
            map-type-id="terrain"
            style="width: 1000px; height: 800px"
          >
            <GmapMarker
              v-bind:key="index"
              v-for="(m, index) in suppliers"
              v-bind:position="{lat: parseFloat(m.latitude), lng: parseFloat(m.longitude)}"
              v-bind:clickable="true"
            ></GmapMarker>
          </GmapMap>
        </div>
      </div>
      <vue-particles
        class="trans"
        color="#dedede"
        :particleOpacity="0.9"
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
import Vuex from "vuex";
export default {
  name: "SuppliersMap",

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
  z-index: 500;
  position: absolute;
}
.test {
  margin: auto;
}
</style>