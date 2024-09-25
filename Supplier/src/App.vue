<script>
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'

export default {
  components: {
    SuppliersList,
    SuppliersMap
  }
}
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="navbar-logo">
        <img alt="Spirulina" src="C:\Users\damien.lobato\SPA_vuejs-suppliers-2022\images\spiruline.png" />
      </div>
      <div class="navbar-links">
        <RouterLink to="/suppliersList">Suppliers List</RouterLink>
        <RouterLink to="/map">Map</RouterLink>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.navbar-logo img {
  width: 100px;
  height: auto;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: #ffdd57;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar-logo {
    margin-bottom: 1rem;
  }

  .navbar-links {
    flex-direction: column;
    gap: 1rem;
  }
}

main {
  margin-top: 120px; /* Adjust this value if the navbar height changes */
  padding: 1rem;
}
</style>
