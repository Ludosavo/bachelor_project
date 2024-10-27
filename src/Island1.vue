<script>
import ChatGPT from "./components/icons/ChatGPT.vue";
import GoogleCSE from "./GoogleCSE.vue";
export default {
  components: {
    ChatGPT,
  },
};
</script>

<template>
  <main id="island1">
    <div class="question_card">Domanda:</div>
    <div id="search_engine">
      <div class="engine">Google:</div>
      <br />
      <div class="gcse-search"></div>
    </div>
    <div id="llm">
      <div class="engine">ChatGPT:</div>
      <br />
      <ChatGPT />
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
#island1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 80vh;
  align-items: center;
}

.question_card {
  grid-column: 1 / span 2;
  grid-row: 1;
  justify-self: center;
  border: 2px solid white;
  border-radius: 3px;
  width: auto;
  height: auto;
  font-size: 35px;
}

.engine {
  align-content: center;
  font-size: 50px;
  justify-self: center;
  align-self: center;
}

#search_engine {
  border: 2px solid white;
  border-radius: 10px;
  height: 70vh;
  width: 70vh;
  grid-column: 1;
  grid-row: 2;
  justify-self: center;
}

#llm {
  border: 2px solid white;
  border-radius: 10px;
  height: 70vh;
  width: 70vh;
  justify-self: center;
  grid-column: 2;
  grid-row: 2;
}
</style>
