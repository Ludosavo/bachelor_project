<template>
  <main>
    <RouterLink to="/island1" id="isla1" style="text-decoration: none; color: bisque;">
      <img  src="/island.svg" alt="island1"/> NATURE
    </RouterLink>
    <RouterLink to="/island2" id="isla2" style="text-decoration: none; color: bisque;">
      <img src="/island.svg" alt="island2"/> SCIENCE
    </RouterLink>
    <RouterLink to="/island3" id="isla3" style="text-decoration: none; color: bisque;">
      <img src="/island.svg" alt="island3"/> GEOGRAPHY
    </RouterLink>
    <RouterLink to="/island4" id="isla4" style="text-decoration: none; color: bisque;">
      <img src="/island.svg" alt="island4"/> CURIOSITY
    </RouterLink>
  </main>
</template>

<style>
main{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
    padding: 0;
    font-size: 40px;
    color: white;
}

#isla1{
    grid-column: 1;
    grid-row: 2;
}

#isla2{
    grid-column: 2;
    grid-row: 1;
}

#isla3{
    grid-column: 3;
    grid-row: 1;
}

#isla4{
    grid-column: 4;
    grid-row: 2;
}

</style>
