<script>
import axios from "axios";
import Supplier from "@/components/Supplier.vue";
import Map from "@/components/Map.vue";

export default {
  name: "SupplierInfo",
  components: {Supplier, Map},
  data() {
    return {
      supplier: {},
      resellers: [],
      loading: false,
      error: null,
      id: this.$route.params.id,
    };
  },
  methods: {
      getAllSuppliersFromAPI() {
      this.loading = true;
      const url = "https://suppliers.depembroke.fr/api/suppliers/" + this.id;
      axios
          .get(url)
          .then((response) => {
            this.supplier = response.data
            this.resellers = this.supplier.resellers.map(reseller => ({
              name: reseller.name,
              description: reseller.description,
              latitude: reseller.latitude,
              longitude: reseller.longitude,
            }))
          })
          .catch((error) => {
            this.error = error.message;
          })
          .finally(() => {
            this.loading = false;
          });
    }
  },
  created() {
    if (this.resellers.length > 0) {
    } else {
      this.getAllSuppliersFromAPI();
    }
  }
};
</script>

<template>
  <div class="supplier-info-container">
    <Supplier
        :name="supplier.name"
        :status="supplier.status"
        :checkedAt="supplier.checkedAt"
    ></Supplier>
  </div>

  <div class="resellers-container"></div>
  <h2 class="resellers-title">Resellers</h2>
  <div class="reseller-card " v-for="reseller in resellers" :key="reseller.id">
    <h3 class="reseller-name"> {{reseller.name}} </h3>
    <p class="reseller-description">{{ reseller.description }}</p>
  </div>
  <Map :markers="resellers"></Map>
</template>
<style scoped>
.supplier-info-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

.resellers-container {
  margin-top: 2rem;
}

.resellers-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}

.reseller-name {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.reseller-description {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
}

@media (min-width: 768px) {
  .resellers-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusts to screen size */
    gap: 1.5rem;
  }
}
</style>