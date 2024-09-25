<script>
import {LMap, LTileLayer, LMarker} from "@vue-leaflet/vue-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 1,
      center: [46.5322, 2.9482],
      bounds: null,
      suppliers: [
        {
          id: 1,
          latitude: 20.682859,
          longitude: -88.567947
        },
        {
          id: 2,
          latitude: -13.164416,
          longitude: -72.547059
        },
        {
          id: 3,
          latitude: 29.97862,
          longitude: 31.13892
        },
        {
          id: 4,
          latitude: -16.317771,
          longitude: 145.406236
        }]
    };
  }
};
</script>

<template>
  <div style="height: 500px; width: 700px; max-width: 1200px; margin: 0 auto;">
    <LMap :zoom="zoom" :center="center" style="height: 100%; width: 100%;">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]" :key="supplier.id"></LMarker>
    </LMap>
  </div>
</template>

<style>
</style>

