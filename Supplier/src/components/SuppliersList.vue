<script>
import Supplier from "@/components/Supplier.vue";

export default {
  components: {Supplier},
  props: {
    name: "SuppliersList"
  },
  data() {
    return {
      suppliers: [
        {
          id: 1,
          name: "Fournisseur 1",
          status: true,
          checkedAt: new Date()
        },
        {
          id: 2,
          name: "Fournisseur 2",
          status: false,
          checkedAt: new Date()
        }
      ]
    }
  }
}
</script>

<template>
  <div class="suppliers-container">
    <h1>Suppliers List</h1>
    <div class="suppliers-list">
      <Supplier
          v-for="supplier in suppliers"
          :name="supplier.name"
          :status="supplier.status"
          :checkedAt="supplier.checkedAt"
          :key="supplier.id"
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  text-align: center;
  color: #00bd7e;
  margin-bottom: 2rem;
}

/* Container for the entire supplier list */
.suppliers-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

/* Layout for supplier cards */
.suppliers-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 1.5rem; /* Space between supplier cards */
}


</style>