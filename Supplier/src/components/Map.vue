<script>
import {LMap, LTileLayer, LMarker} from "@vue-leaflet/vue-leaflet";
import axios from "axios";

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
      suppliers: [],
      loading: false,
      error: null,
      selectedSupplierName: null
    };
  },
  methods: {
    showSupplierName(name) {
      this.selectedSupplierName = name;
    }
  },
  created() {
    this.loading = true;
    setTimeout(() => {
      axios
          .get('https://suppliers.depembroke.fr/api/suppliers')
          .then(response => {
            this.suppliers = response.data.data.map(supplier => ({
              id: supplier.id,
              name: supplier.name,
              latitude: supplier.latitude,
              longitude: supplier.longitude,
            }));
          })
          .catch(error => {
            this.error = error.message;
          })
          .finally(() => {
            this.loading = false;
          });
    }, 1000);
  }
};
</script>

<template>
  <p v-if="loading"> Wait please... </p>
  <div style="height: 500px; width: 700px; max-width: 1200px; margin: 0 auto;">
    <LMap ref="map" :zoom="zoom" :center="center" style="height: 100%; width: 100%;">
      <LTileLayer :url="url"></LTileLayer>
      <LMarker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]" :key="supplier.id"
               @click="showSupplierName(supplier.name)"
               v-if="!error"></LMarker>
    </LMap> <div v-if="selectedSupplierName">
    <p>Selected Supplier: {{ selectedSupplierName }}</p>
  </div>
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

