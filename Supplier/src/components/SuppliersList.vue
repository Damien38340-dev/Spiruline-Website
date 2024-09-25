<script>
import Supplier from "@/components/Supplier.vue";

export default {
  components: {Supplier},
  props: {
    name: "SuppliersList"
  },
  data() {
    return {
      name: 'My supplier',
      status: false, // is there stock ?
      checkedAt: new Date() // last check
    }
  }
}
</script>

<template>
  <h1> Suppliers List </h1>
  <Supplier :name="name" :status="status" :checkedAt="checkedAt"></Supplier>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  text-align: center;
  color: #00bd7e;
}
</style>