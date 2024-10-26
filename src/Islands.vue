<template>
  <main id="islands">
    <RouterLink
      to="/island1"
      id="isla1"
      style="text-decoration: none;">
      <img src="/island1.png" alt="island1"  style="width: 400px; height: 500px;"/> 
      <div class="subjects">NATURA</div>
    </RouterLink>
    <!-- <img src="/footbridge.png" alt="island1"  
     style="width: 600px; 
     height: 400px; 
     grid-column: 3; 
     transform: rotate(80deg)"/>  -->
    <RouterLink
      to="/island2"
      id="isla2"
      style="text-decoration: none">
      <img src="/island2.png" alt="island2" style="width: 400px; height: 500px;"/>  
      <div class="subjects">SCIENZA</div>
    </RouterLink>
    <!-- <img src="/footbridge.png" alt="island1"  
      style="width: 500px; 
      height: 300px; 
      grid-row: 1; 
      grid-column: 1; 
      transform: rotate(370deg);
      align-self: end;"
      />  -->
    <RouterLink
      to="/island3"
      id="isla3"
      style="text-decoration: none;">
      <img src="/island3.png" alt="island3" style="width: 400px; height: 500px;"/> 
      <div class="subjects">GEOGRAFIA</div>
    </RouterLink>
    <RouterLink
      to="/island4"
      id="isla4"
      style="text-decoration: none;">
      <img src="/island4.png" alt="island4" style="width: 400px; height: 500px;"/> 
      <div class="subjects">CURIOSITÀ</div>
    </RouterLink>
  </main>
</template>

<style scoped>
#islands {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;

}

#isla1 {
  grid-column: 1;
  grid-row: 2;
}

#isla2 {
  grid-column: 2;
  grid-row: 1;
}

#isla3 {
  grid-column: 3;
  grid-row: 1;
}

#isla4 {
  grid-column: 4;
  grid-row: 2;
}

.subjects{
  font-size: 40px;
  text-decoration: none; 
  color: bisque
}


</style>
