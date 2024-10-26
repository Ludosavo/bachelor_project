<script setup lang="ts">
</script>

<template>
  <main>
    <h1>BENVENUTO SULL'ISOLA DELLA CONOSCENZA!</h1>
    
    <RouterLink to="/islands" style="text-decoration: none; color: rgb(245, 245, 245); justify-items: center;"> 
      <img id="image" src="/island.png" alt="image" > 
      <div>Clicca qui per iniziare il gioco</div>
      <font-awesome-icon :icon="['fas', 'arrow-right']" /> 
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh; 
}

#image{
  grid-row: 2;
  grid-column:1;
  width: 400px;
  height: 500px;
}

h1 {
  grid-column: 1;
  grid-row: 1;
  font-size: 80px;
  text-align: center;
  white-space: nowrap;
}

div {
  grid-column: 1;
  grid-row: 3;
  font-size: 80px;
  text-align: center;
  white-space: nowrap;
  
}

</style>
