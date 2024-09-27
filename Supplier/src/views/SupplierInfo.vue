<script>
import axios from "axios";
import Supplier from "@/components/Supplier.vue";
import Map from "@/components/Map.vue";

export default {
  name: "SupplierInfo",
  components: {Supplier, Map},
props: {
  reseller: []  ,

},
  data() {
    return {
      supplier: {},
      resellers: [],
      loading: false,
      error: null,
      id:this.$route.params.id
    };
  },
  methods: {
    getAllSuppliersFromAPI() {}
  },
    created() {
      this.loading = true;
      const url = "https://suppliers.depembroke.fr/api/suppliers/" + this.id;
      axios
          .get(url)
          .then((response) => {
            this.supplier = response.data
            this.resellers = this.supplier.resellers.map(reseller=> ({
              name: reseller.name,
              description: reseller.description,

            }))
          })
          .catch((error) => {
            this.error = error.message;
          })
          .finally(() => {
            this.loading = false;
          });
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
<Map ></Map>
</template>
<style scoped>

</style>