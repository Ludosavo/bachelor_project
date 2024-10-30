<script>
import ChatBox from "./components/ChatBox.vue";
import ChatGPT from "./components/ChatGPT.vue";
import GoogleCSE from "./components/GoogleCSE.vue";
export default {
  components: {
    ChatGPT,
    GoogleCSE,
    ChatBox,
  },
// function that saves answer
methods: {
  submit_answer() {
    const inputArray = [];
    const inputValue = document.getElementById("inputField").value;
    console.log("ciccia");

    // Check if input is not empty before saving
    if (inputValue.trim() !== "") {
      inputArray.push(inputValue);
      document.getElementById("inputField").value = "";
      // document.getElementById("output").innerText = `Array contents: ${inputArray.join(", ")}`;
    } else {
      alert("Premi INVIA prima di proseguire");
    }
  }
}}
</script>

<template>
  <main class="island1">
    <div class="question_card">
      <h2>Domanda:</h2>
      <p>Qual è il pianeta più caldo del sistema solare?</p>
    </div>
    <div class="answer_card">
      <h2>Risposta:</h2>
      <div id="input_button">
        <input type="text" id="inputField" />
        <button class="submit" @click="submit_answer()">Invia</button>
      </div>
    </div>
    <div id="search_engine">
      <div class="engine">Google:</div>
      <div class="searching"><GoogleCSE /></div>
    </div>
    <div id="score">
      <h2>Punteggio:</h2>
    </div>
    <div id="llm">
      <div class="engine">ChatGPT:</div>
      <ChatGPT />
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
.island1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 100%;
  background-image: url("/public/nature_background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.question_card {
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  border: 4px solid rgb(0, 0, 0);
  border-radius: 12px;
  width: 90%;
  height: 70%;
  font-size: 30px;
  background-color: rgb(48, 128, 19);
}

.question_card h2 {
  text-align: center;
  color: white;
}
.question_card p {
  text-align: center;
  font-size: 40px;
  color: white;
}

.answer_card {
  width: 90%;
  height: 60%;
  grid-column: 2;
  grid-row: 1;
  display: grid;
  grid-template-rows: 120px 1fr;
  justify-self: center;
  justify-items: center;
  border: 4px solid rgb(0, 0, 0);
  border-radius: 12px;
  background-color: rgb(48, 128, 19);
  font-size: 30px;
}

.answer_card #input_button {
  grid-row: 2;
  justify-self: center;
}

#score {
  grid-column: 2;
  grid-row: 1;
  justify-items: self-end;
  align-self: flex-start;
}

#score h2 {
  margin-right: 120px;
}
.engine {
  align-content: center;
  font-size: 50px;
  justify-self: center;
  align-self: center;
}

#search_engine {
  grid-column: 1;
  grid-row: 2;
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 400px;
  overflow-y: auto;
  width: 90%;
  margin-bottom: 30px;
  justify-self: center;
  border: 4px solid rgb(0, 0, 0);
  border-radius: 12px;
  background-color: rgb(48, 128, 19);
  align-self: flex-start;
  overflow-y: scroll;
}

#search_engine .engine {
  justify-self: center;
  grid-row: 1;
}

#search_engine .searching {
  justify-self: center;
  grid-row: 2;
}

.results {
  margin-left: 45px;
}

#llm {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 400px;
  width: 90%;
  margin-bottom: 30px;
  justify-self: center;
  border: 4px solid rgb(0, 0, 0);
  border-radius: 12px;
  background-color: rgb(48, 128, 19);
  align-self: flex-start;
  overflow-y: scroll;
}
</style>
