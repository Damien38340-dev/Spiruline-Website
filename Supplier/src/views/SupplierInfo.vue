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
      markers: []
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
            this.resellers = this.supplier.resellers.map(reseller=> ({
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

      }else {
        this.getAllSuppliersFromAPI();

      }
    }
};
</script>

<template>
<Supplier
    :name="supplier.name"
    :status="supplier.status"
    :checkedAt="supplier.checkedAt"
></Supplier>
  <div v-for="reseller in resellers">{{reseller.name}}
  <p>  </p>
  </div>
<Map :markers="resellers"></Map>
</template>
<style scoped>

</style>