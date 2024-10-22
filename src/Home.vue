<script setup lang="ts">
import Islands from "./Islands.vue";
</script>

<template>
  <main>
    <h1>WELCOME TO SEARCH ISLAND</h1>
    <RouterLink to="/islands"> <img src="../public/island.svg" alt="image"></RouterLink>
  </main>
</template>

<style>
main {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
}

img {
  grid-row: 2;
  grid-column: 1;
  border: none;
}

h1 {
  grid-column: 1;
  grid-row: 1;
  font-size: 80px;
  text-align: center;
  white-space: nowrap;
}
</style>
