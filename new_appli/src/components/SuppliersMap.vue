
<template>
  <div class="container">
    <h1>Carte des fournisseurs</h1>
    <div class="row">
      <div class="mx-auto">
        <GmapMap
          v-bind:center="{lat:45.889751, lng:6.135465}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 600px; height: 500px"
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