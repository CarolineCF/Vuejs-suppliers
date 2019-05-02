
<template>
  <div>
    <div>
    <div class="row av" >
      <div class="mx-auto">
        <GmapMap class="test"
          v-bind:center="{lat:45.889751, lng:6.135465}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 1000px; height: 800px"
        >
          <GmapMarker
            v-bind:key="index"
            v-for="(m, index) in suppliers"
            v-bind:position="{lat:m.latitude, lng: m.longitude}"
            v-bind:clickable="true"
          ></GmapMarker>
        </GmapMap>
      </div>
    </div>
           <vue-particles class="trans"
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
        clickMode="repulse"
      >
     </vue-particles>
     </div>
 
 
  </div>
</template>

<script>
export default {
  name: "SuppliersMap",
  props: {},
  data: function() {
    return {
      suppliers: [
        {
          id: 1,
          latitude: 45.7578137,
          longitude: 4.8320114
        },
        {
          id: 2,
          latitude: 48.8566101,
          longitude: 2.3514992
        },
        {
          id: 1,
          latitude: 10.506098,
          longitude: -66.9146017
        },
        {
          id: 2,
          latitude: 45.889751,
          longitude: 6.135465
        }
      ]
    };
  }
};
</script>
<style scoped>

.av {
  display:block;
width: 100%;
  z-index: 999;
  position: absolute;
}
.test {
  margin: auto;
}

</style>