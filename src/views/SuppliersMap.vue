<script>
import Map from "@/components/Map.vue";
import axios from 'axios';

export default {
  components: {Map},
  props: {
    name: "SuppliersMap"
  },
  data() {
    return {
      loading: false,
      error: null,
      suppliers: [],
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
}
</script>

<template>
  <h1> Suppliers Map </h1>
  <Map :markers="suppliers"/>

</template>

<style scoped>
h1{
  font-size: 1.5rem;
  font-weight: bold;
  color: cadetblue;
}
</style>