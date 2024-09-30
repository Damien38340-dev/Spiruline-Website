<script>
import {LMap, LTileLayer, LMarker, LPopup} from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  props: {
    markers: Array,
     },

  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 1,
      center: [46.5322, 2.9482],
      bounds: null,
      suppliers: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    goToSupplierPage(supplierId) {
      this.$router.push({name: 'SupplierInfo' , params: {id: supplierId}});
    },
  },
  updated() {
    console.log(this.markers);
    this.markers.forEach((item) => {
      this.suppliers.push(item);
    })
  }
};
</script>

<template>
  <p v-if="loading"> Wait please... </p>
  <div style="height: 500px; width: 700px; max-width: 1200px; margin: 0 auto;">

    <LMap ref="map" :zoom="zoom" :center="center" style="height: 100%; width: 100%;">

      <LTileLayer :url="url"></LTileLayer>
      <LMarker v-for="supplier in suppliers" :key="supplier.id" :lat-lng="[supplier.latitude, supplier.longitude]">
        <l-popup> <span @click="goToSupplierPage(supplier.id)"
                         style="cursor: pointer; color: blue; text-decoration: underline;">
            {{ supplier.name }}
          </span> </l-popup>
      </LMarker>
    </LMap>
  </div>
  <p v-if="error" :class="{errorColor: error}"> {{ error }} </p>
</template>

<style>
.errorColor {
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>

