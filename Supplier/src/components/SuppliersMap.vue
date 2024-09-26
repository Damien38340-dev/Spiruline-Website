<script>
import Map from "@/components/Map.vue";
import axios, {isCancel, AxiosError} from 'axios';


export default {
  components: {Map},
  props: {
    name: "SuppliersMap"
  }
}
</script>

<template>
  <h1> Suppliers Map </h1>
  <Map/>

</template>

<style scoped>
h1{
  font-size: 1.5rem;
  font-weight: bold;
  color: cadetblue;
}
</style>