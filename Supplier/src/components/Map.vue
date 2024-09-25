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
      bounds: null
    };
  }
};
</script>

<template>
  <div style="height: 500px; width: 700px; max-width: 1200px; margin: 0 auto;">
    <LMap :zoom="zoom" :center="center" style="height: 100%; width: 100%;">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker :lat-lng="[45.291584, 5.638007]"></LMarker>
      <LMarker :lat-lng="[20.682859, -88.567947]"></LMarker>
      <LMarker :lat-lng="[-13.164416, -72.547059]"></LMarker>
      <LMarker :lat-lng="[29.97862, 31.13892]"></LMarker>
      <LMarker :lat-lng="[-16.317771, 145.406236]"></LMarker>
    </LMap>
  </div>
</template>

<style>
</style>

