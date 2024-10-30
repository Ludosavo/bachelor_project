<script>
import ChatGPT from "./components/ChatGPT.vue";
// import ChatBox from "./components/ChatBox.vue";
// import GoogleCSE from "./components/GoogleCSE.vue";
export default {
  components: {
    ChatGPT,
    // ChatBox,
    // GoogleCSE,
  },
};
</script>

<template>
  <main class="island1">
    <div class="question_card">Domanda:</div>
    <div class="answer_card">
      <input type="text">
      <button class="submit" @click="submit_answer()"> Invia</button>
    </div>
    <div id="search_engine">
      <div class="engine">Google:</div>
      <br />
      <GoogleCSE/>
    </div>
    <div id="llm">
      <div class="engine">ChatGPT:</div>
      <br />
      <ChatGPT/>
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
.island1 {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: center;
}

.question_card {
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  border: 2px solid white;
  border-radius: 3px;
  font-size: 35px;
}

.answer_card{
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
  border: 2px solid white;
  border-radius: 3px;
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
  width: 100%;
  height: 100%;
  grid-column: 1;
  grid-row: 2;
  justify-self: center;
}

#llm {
  border: 2px solid white;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  justify-self: center;
  grid-column: 2;
  grid-row: 2;
}
</style>
