<script>
import { useDataStore } from "@/stores/store";
import { useQuestionsStore } from "@/stores/questions";
import GoogleCSE from "@/components/GoogleCSE.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import GeminiAI from "./components/GeminiAI.vue";

export default {
  setup() {
    const dataStore = useDataStore();
    const questionsStore = useQuestionsStore();

    return {
      dataStore,
      questionsStore,
    };
  },
  mounted() {
    this.questionsStore.setIds(
      this.$route.params.id,
      this.$route.params.question
    );
  },
  beforeUpdate() {
    this.questionsStore.setIds(
      this.$route.params.id,
      this.$route.params.question
    );
  },
  components: {
    GeminiAI,
    GoogleCSE,
    FontAwesomeIcon,
  },
  computed: {
    scoreText() {
      return this.$route.params.score;
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
        this.dataStore.addQuestionAnswer(
          this.questionsStore.currentQuestion,
          inputValue
        );
        inputField.value = " ";
      } else {
        alert("Inserisci una risposta prima di proseguire");
      }
    },
    updateCurrentQuestionInStore() {
      this.dataStore.setCurrentQuestion(this.questionsStore.currentQuestion);
    },
    completed() {
      console.log("before", this.dataStore.isComplete);
      this.dataStore.setCompletion();
      console.log("after", this.dataStore.isComplete);
    },
  },
};
</script>

<template>
  <main :class="'island'">
    <div class="question_card">
      <h2>Domanda:</h2>
      <p>{{ this.questionsStore.currentQuestion }}</p>
    </div>
    <div class="answer_card">
      <h2>Risposta:</h2>
      <textarea placeholder="Scrivi qui la risposta" id="inputField">
      </textarea>
      <div id="input_button">
        <button class="submit" @click="this.submit_answer()">Invia</button>
      </div>
    </div>
    <div id="search_engine">
      <div class="engine">Google:</div>
      <div class="searching">
        <GoogleCSE />
      </div>
    </div>
    <div id="llm">
      <div class="engine">ChatGPT:</div>
      <ChatGPT />
    </div>
    <div id="score">
      <h2>Punteggio:</h2>
      <h2>{{ this.dataStore.score }}</h2>
    </div>
    <div id="download" @click="this.dataStore.export">
        <font-awesome-icon icon="download" style="font-size: xx-large;"/>
    </div>
    <RouterLink
      :to="`/island/${this.$route.params.id}/${
        parseInt(this.$route.params.question) + 1
      }`"
      id="next_question"
      v-if="!this.questionsStore.isLast"
    >
      <font-awesome-icon
        icon="arrow-right"
        style="font-size: xx-large; color: var(--red-coral)"
      />
    </RouterLink>
    <RouterLink :to="`/islands`" id="next_question" v-else @click="completed">
      <font-awesome-icon
        icon="house"
        style="font-size: xx-large; color: var(--red-coral)"
      />
    </RouterLink>
  </main>
  <RouterView />
</template>

<style scoped>
:root {
  --background-page: #0077b6;
  --background-cards: #e9c46a;
  --red-coral: #e63946;
  --white-cloud: #f4f4f9;
}

.island {
  display: grid;
  grid-template-columns: 0.5fr 4fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 25px;
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
  width: 95%;
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
  width: 95%;
  height: 60%;
  grid-column: 2;
  grid-row: 3;
  justify-self: center;
  border-radius: 12px;
  background-color: var(--background-cards);
  color: var(--red-coral);
  font-size: 30px;
}

.answer_card h2 {
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
#download {
  grid-column: 3;
  grid-row: 1;
  display: flex;
  color: var(--red-coral);
  background-color: var(--background-cards);
  padding: 5px;
  width: 30%;
  border-radius: 4px;
  align-self: center;
  justify-self: center;
  justify-content: space-around;
  align-items: flex-end;
}

#score {
  grid-column: 3;
  grid-row: 1;
  display: flex;
  color: var(--red-coral);
  background-color: var(--background-cards);
  padding: 5px;
  width: 100%;
  border-radius: 4px;
  align-self: flex-start;
  justify-content: space-around;
  align-items: flex-end;
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
  width: 95%;
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
  width: 95%;
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
  border-radius: 4px;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

#homeButton {
  color: var(--red-coral);
  background-color: var(--background-cards);
  height: 40px;
}
</style>
