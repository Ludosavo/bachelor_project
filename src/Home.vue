<script setup lang="ts">
import Islands from "./Islands.vue";
</script>

<template>
  <main>
    <h1>WELCOME TO SEARCH ISLAND</h1>
    <RouterLink to="/islands"> PROVA </RouterLink>
  </main>
</template>

<style>
main {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
}

.home_island {
  padding: 180px;
  justify-self: center;
  grid-row: 2;
  grid-column: 1;
  justify-self: center;
  background: url(../public/island.svg) no-repeat;
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
