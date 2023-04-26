<template>
  <div>
    <ProductGallay></ProductGallay>
  </div>
</template>

<script setup>
import useProductStore from "../store/product.js";
import ProductGallay from "@/components/ProductGallay.vue";
const productStore = useProductStore();
const products = productStore.getProducts;
console.log(useProductStore);
</script>
