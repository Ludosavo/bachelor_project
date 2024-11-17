<script>
import { useDataStore } from "@/stores/store";
import ChatGPT from "@/components/ChatGPT.vue";
import GoogleCSE from "@/components/GoogleCSE.vue";
import questions from "@/config/questions";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  setup() {
    // Import the store and use it within setup
    const dataStore = useDataStore();
    return { dataStore };
  },
  components: {
    ChatGPT,
    GoogleCSE,
    FontAwesomeIcon,
  },
  computed: {
    question() {
      return questions[this.$route.params.id][this.$route.params.question];
    },
    scoreText() {
      return this.$route.params.score ;
    },

  },
  // function that saves answer
  methods: {
    submit_answer() {
      const inputArray = [];
      let inputValue = document.getElementById("inputField").value;

      // Check if input is not empty before saving
      if (inputValue.trim() !== "") {
        inputArray.push(inputValue);
        // document.getElementById("inputField").value = "";
        this.dataStore.addQuestionAnswer(this.question, inputValue);
        inputField.value = " ";
      } else {
        alert("Inserisci una risposta prima di proseguire");
      }
    },
    updateCurrentQuestionInStore() {
      this.dataStore.setCurrentQuestion(this.question); // Set the current question in the store
    },
  },
};
</script>

<template>
  <main :class="'island'">
    <div class="question_card">
      <h2>Domanda:</h2>
      <p>{{ question }}</p>
    </div>
    <div class="answer_card">
      <h2>Risposta:</h2>
      <textarea placeholder="Scrivi qui la risposta" id="inputField">
      </textarea>
      <div id="input_button">
        <button class="submit" @click="this.submit_answer()">Invia</button>
      </div>
    </div>
    <div id="search_engine" v-if="$route.params.question % 2 !== 0">
      <div class="engine">Google:</div>
      <div class="searching">
        <GoogleCSE />
      </div>
    </div>
    <div id="llm" v-else>
      <div class="engine">ChatGPT:</div>
      <ChatGPT />
    </div>
    <div id="score">
      <h2>Punteggio:</h2>
      <p>{{ scoreText }}</p>
    </div>
    <button id="next_question">
      <RouterLink
        :to="`/island/${this.$route.params.id}/${
          parseInt(this.$route.params.question) + 1
        }`"
        style="text-decoration: none; color: var(--red-coral)"
      >
        Prossima domanda
      </RouterLink>
      <font-awesome-icon
        icon="arrow-right"
        style="font-size: small; color: var(--red-coral)"
      />
    </button>
    <RouterLink
      :to="'/islands'"
      style="
        align-self: start;
        justify-self: start;
        margin-top: 30px;
        margin-left: 30px;">
      <button id="homeButton">
        <font-awesome-icon
          icon="house"
          style="color: var(--red-coral); font-size: x-large"
        />
      </button>
    </RouterLink>
  </main>
  <RouterView />
</template>

<style>
:root {
  --background-page: #0077b6;
  --background-cards: #e9c46a;
  --red-coral: #e63946;
  --white-cloud: #f4f4f9;
}

.island {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  min-height: 100%;
  background-color: var(--background-page);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.question_card {
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
  border-radius: 12px;
  width: 100%;
  height: 48%;
  font-size: 30px;
  background-color: var(--background-cards);
}

.question_card h2 {
  text-align: center;
  color: var(--red-coral);
}

.question_card p {
  text-align: center;
  font-size: 40px;
  color: var(--red-coral);
}

.answer_card {
  width: 100%;
  height: 60%;
  grid-column: 2;
  grid-row: 3;
  border-radius: 12px;
  background-color: var(--background-cards);
  color: var(--red-coral);
  font-size: 30px;
}

.answer_card h2{
  grid-row: 1;
  color: var(--red-coral);
  text-align: center;
}

.answer_card #input_button {
  grid-row: 2;
  grid-column: 5;
  justify-self: center;
}

.answer_card #inputField {
  grid-row: 2;
  border-radius: 8px;
  justify-self: center;
  align-self: center;
  margin-left: 25px;
  width: 90%;
  overflow: scroll;
}

#score {
  grid-column: 3;
  grid-row: 1;
  justify-items: self-end;
  align-self: flex-start;
}

#score h2 {
  color: var(--red-coral);
  margin-right: 10px;
  background-color: var(--background-cards);
  padding: 20px;
  width: 100%;
  border-radius: 4px;
}

.engine {
  color: var(--red-coral);
  align-content: center;
  font-size: 50px;
  justify-self: center;
  align-self: center;
}

#search_engine {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 400px;
  overflow-y: auto;
  width: 100%;
  margin-bottom: 30px;
  justify-self: center;
  border-radius: 12px;
  background-color: var(--background-cards);
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
#llm {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 400px;
  width: 100%;
  margin-bottom: 30px;
  justify-self: center;
  border-radius: 12px;
  background-color: var(--background-cards);
  align-self: flex-start;
  overflow-y: scroll;
}

.results {
  width: 100%;
}

#next_question {
  height: 15%;
  width: 60%;
  grid-column: 3;
  grid-row: 3;
  border: none;
  background-color: var(--background-cards);
  justify-self: center;
}

#homeButton {
  color: var(--red-coral);
  background-color: var(--background-cards);
  height: 40px;
}
</style>
