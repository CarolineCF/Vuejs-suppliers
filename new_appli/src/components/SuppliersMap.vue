<template>
<div class="container">
    <h1>Carte des fournisseurs</h1>
    <div class="row">
    <div class="mx-auto">
 <GmapMap
  :center="{lat:10, lng:10}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 600px; height: 500px"
>
<GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
  
</GmapMap>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'SuppliersMap',
  props: {

    }
}
</script>