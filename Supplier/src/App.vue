<script>

import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'

export default {
  components: {
    SuppliersList,
    SuppliersMap
  },
  methods: {
    onSuppliersListClick() {
      alert('Suppliers list clicked!');
    },
    onMapClick() {
      alert('Map clicked!');
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
    <div class="wrapper">
    </div>
  </header>
  <main>
    <SuppliersList @click="onSuppliersListClick"></SuppliersList>
    <SuppliersMap @click="onMapClick"></SuppliersMap>

    <RouterLink to="/suppliers">Go to Suppliers List</RouterLink>
    <RouterLink to="/map">Go to Map</RouterLink>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
