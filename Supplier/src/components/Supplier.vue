<script>
export default {
  name: 'MySupplier',
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
  <h1> Supplier: {{ name }}</h1>
  <h2 :class="status? 'green' : 'red'"> Stock ? {{ status ? "OK" : "KO" }} </h2>
  <h3> Last inventory date: {{ checkedAt.toLocaleString() }} </h3>
</template>

<style scoped>
.green {
  color: green;
}

.red {
  color: red;
}
</style>