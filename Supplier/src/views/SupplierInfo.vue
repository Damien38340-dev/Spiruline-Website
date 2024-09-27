<script>
import axios from "axios";

export default {
  name: "SupplierInfo",
  data() {
    return {
      supplier: null,
      loading: false,
      error: null
    };
  },
  methods: {

    getSupplierId(id) {
      id = this.$route.params.id;
    },

    created() {
      this.loading = true;
      axios
          .get("https://suppliers.depembroke.fr/api/suppliers")
          .then((response) => {
            this.suppliers = response.data.data.map(supplier => ({
              name: supplier.name,
              status: supplier.status,
              checkedAt: supplier.checkedAt,
            }));
          })
          .catch((error) => {
            this.error = error.message;
          })
          .finally(() => {
            this.loading = false;
          });
    }
  },
};
</script>

<template>

</template>
<style scoped>

</style>