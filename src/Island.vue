<script>
import { useDataStore } from "@/stores/store";
import { useQuestionsStore } from "@/stores/questions";
import GoogleCSE from "@/components/GoogleCSE.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import GeminiAI from "./components/GeminiAI.vue";
import GeminiTutorial from "./components/GeminiTutorial.vue";
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
    const currentIsland = this.$route.params.id;
    if (!this.dataStore.startTimes[currentIsland]) {
      this.dataStore.setStartTime(currentIsland, new Date());
    }

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
    GeminiTutorial,
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
      const inputField = document.getElementById("inputField");
      const output = document.getElementById("output");

      if (!inputField) {
        console.error("Input field element not found.");
        return;
      }

      let inputValue = inputField.value;

      // Check if input is not empty before saving
      if (inputValue.trim() !== "") {
        inputArray.push(inputValue);

        // Add the question and answer to the data store
        this.dataStore.addQuestionAnswer(
          this.questionsStore.currentQuestion,
          inputValue
        );

        // Reset the input field
        inputField.value = "";

        // Update the output message
        if (output) {
          output.textContent = "Risposta salvata!";
        } else {
          console.error("Output element not found.");
        }

        // Clear the output after a short delay to prepare for the next question
        setTimeout(() => {
          if (output) {
            output.textContent = "";
          }
        }, 1000); 
      } else {
        alert("Inserisci una risposta prima di proseguire");
      }
    },
    updateCurrentQuestionInStore() {
      this.dataStore.setCurrentQuestion(this.questionsStore.currentQuestion);
    },
    completeIsland() {
      const islandId = parseInt(this.$route.params.id);
      const completionTime = this.dataStore.computeCompletionTime(islandId);
      this.dataStore.completeIsland(islandId);
    },
  },
};
</script>

<template>
  <div class="ocean">
    <div class="bubble bubble--1"></div>
    <div class="bubble bubble--2"></div>
    <div class="bubble bubble--3"></div>
    <div class="bubble bubble--4"></div>
    <div class="bubble bubble--5"></div>
    <div class="bubble bubble--6"></div>
    <div class="bubble bubble--7"></div>
    <div class="bubble bubble--8"></div>
    <div class="bubble bubble--9"></div>
    <div class="bubble bubble--10"></div>
    <div class="bubble bubble--11"></div>
    <div class="bubble bubble--12"></div>
    <main :class="'island'">
      <div class="question_card">
        <h2>Domanda:</h2>
        <p>{{ this.questionsStore.currentQuestion }}</p>
      </div>
      <div class="answer_card">
        <h2>Risposta:</h2>
        <textarea
          placeholder="Scrivi qui la risposta"
          id="inputField"
        ></textarea>
        <div id="input_button">
          <p id="output"></p>
          <button class="submit" @click="this.submit_answer()">Invia</button>
        </div>
      </div>
      <div id="search_engine" v-if="this.$route.params.question % 2 !== 0">
        <div class="engine">Google:</div>
        <div class="searching">
          <GoogleCSE />
        </div>
      </div>
      <div id="llm" v-else>
        <div class="engine">GeminiAI:</div>
        <GeminiAI />
        <RouterLink
          :to="`/island/${this.$route.params.id}/${parseInt(
            this.$route.params.question
          )}/geminiTutorial`"
          id="tutGem"
          style="text-decoration: none; color: #0077b6"
          >Cos'è GeminiAI</RouterLink
        >
      </div>
      <div id="score">
        <h2>Punteggio:</h2>
        <h2>{{ this.dataStore.score }}</h2>
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
          style="font-size: xx-large; color: var(--background-page)"
        />
      </RouterLink>
      <RouterLink
        :to="`/islands`"
        id="next_question"
        v-else
        @click="completeIsland"
      >
        <font-awesome-icon
          icon="house"
          style="font-size: xx-large; color: var(--background-page)"
        />
      </RouterLink>
    </main>
    <RouterView />
  </div>
</template>

<style>
:root {
  --background-page: #0077b6;
  --background-cards: #e9c46a;
  --font-color: #000000;
  --white-cloud: #f4f4f9;
}
@keyframes animateSprite {
  0% {
    background-position: -600px; /* Starting position moving left sprite */
  }
  20% {
    background-position: 0px; /* Straight on sprite */
  }
  25% {
    background-position: -200px; /* Moving up sprite */
  }
  35% {
    background-position: -400px; /* Moving right sprite */
  }
  40% {
    background-position: -400px;
  }
  50% {
    background-position: -200px; /* Moving up sprite */
  }
  60% {
    background-position: -0px; /* Straight on sprite */
  }
  67% {
    background-position: -600px; /* Moving up sprite */
  }

  100% {
    background-position: -600px;
  }
}

@keyframes swim {
  0% {
    transform: translate(0, 0); /* Starting position */
  }
  20% {
    transform: translate(
      calc(-50vw - 100px),
      0
    ); /* Animate to center of screen */
  }
  25% {
    transform: translate(
      calc(-50vw - 100px),
      0
    ); /* Stay at the center for 1 second */
  }
  35% {
    transform: translate(
      calc(-50vw - 100px),
      -20vh
    ); /* Animate up for 2 seconds */
  }
  50% {
    transform: translate(-25vw, 15vh); /* Animate bottom right for 3 seconds */
  }
  60% {
    transform: translate(-25vw, -20vh); /* Animate up at right of the screen */
  }
  67% {
    transform: translate(-25vw, -20vh);
  }

  100% {
    transform: translate(
      calc(-100vw - 300px),
      0
    ); /* Animate past left past the screen */
  }
}
.ocean {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #182848, #2980b9);
}

.bubble {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  background-color: white;
  bottom: -30px;
  opacity: 0.2;
  animation: bubble 15s ease-in-out infinite,
    sideWays 4s ease-in-out infinite alternate;
}
@keyframes bubble {
  0% {
    transform: translateY(0%);
    opacity: 0.06;
  }
  100% {
    transform: translateY(-120vh);
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 200px;
  }
}

.bubble--1 {
  left: 10%;
  animation-delay: 0.5s;
  animation-duration: 16s;
  opacity: 0.2;
}

.bubble--2 {
  width: 15px;
  height: 15px;
  left: 40%;
  animation-delay: 1s;
  animation-duration: 10s;
  opacity: 0.1;
}

.bubble--3 {
  width: 10px;
  height: 10px;
  left: 30%;
  animation-delay: 5s;
  animation-duration: 20s;
  opacity: 0.3;
}

.bubble--4 {
  width: 25px;
  height: 25px;
  left: 40%;
  animation-delay: 8s;
  animation-duration: 17s;
  opacity: 0.2;
}

.bubble--5 {
  width: 30px;
  height: 30px;
  left: 60%;
  animation-delay: 10s;
  animation-duration: 15s;
  opacity: 0.1;
}

.bubble--6 {
  width: 10px;
  height: 10px;
  left: 80%;
  animation-delay: 3s;
  animation-duration: 30s;
  opacity: 0.4;
}

.bubble--7 {
  width: 15px;
  height: 15px;
  left: 90%;
  animation-delay: -7s;
  animation-duration: 25s;
  opacity: 0.3;
}

.bubble--9 {
  width: 20px;
  height: 20px;
  left: 50%;
  bottom: 30px;
  animation-delay: -5s;
  animation-duration: 19s;
  opacity: 0.2;
}

.bubble--10 {
  width: 40px;
  height: 40px;
  left: 30%;
  bottom: 30px;
  animation-delay: -21s;
  animation-duration: 16s;
  opacity: 0.3;
}

.bubble--11 {
  width: 30px;
  height: 30px;
  left: 60%;
  bottom: 30px;
  animation-delay: -13.75s;
  animation-duration: 20s;
  opacity: 0.3;
}

.bubble--11 {
  width: 25px;
  height: 25px;
  left: 90%;
  bottom: 30px;
  animation-delay: -10.5s;
  animation-duration: 19s;
  opacity: 0.3;
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
  height: 60%;
  font-size: 30px;
  background-color: var(--background-cards);
}

.question_card h2 {
  text-align: center;
  color: var(--font-color);
}

.question_card p {
  text-align: center;
  font-size: 40px;
  color: var(--font-color);
}

.answer_card {
  width: 95%;
  height: 90%;
  grid-column: 2;
  grid-row: 3;
  justify-self: center;
  border-radius: 12px;
  background-color: var(--background-cards);
  color: var(--font-color);
  font-size: 30px;
}

#tutGem {
  width: 20%;
  text-align: center;
  justify-self: end;
  margin-right: -30%;
}

.answer_card h2 {
  color: var(--font-color);
  text-align: center;
}

.answer_card #input_button {
  justify-self: center;
}

.answer_card #inputField {
  border-radius: 8px;
  justify-self: center;
  align-self: center;
  margin-left: 25px;
  width: 95.5%;
  overflow: scroll;
}

#score {
  grid-column: 3;
  grid-row: 1;
  display: flex;
  color: var(--font-color);
  background-color: var(--background-cards);
  padding: 5px;
  width: 100%;
  border-radius: 4px;
  align-self: flex-start;
  justify-content: space-around;
  align-items: flex-end;
}

.engine {
  color: var(--background-cards);
  align-content: center;
  font-size: 50px;
  border-radius: 10px;
  margin-top: 26px;
  padding: 3px;
  justify-self: center;
  align-self: center;
  background-color: var(--background-page);
}

#search_engine {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 400px;
  width: 95%;
  margin-bottom: 30px;
  padding-top: 20px;
  justify-self: center;
  border: 1px solid #e9c46a;
  border-radius: 15px;
  background-color: var(--background-cards);
  align-self: flex-start;
  overflow-y: scroll;
}

#search_engine .engine {
  padding-top: 0;
  margin-top: 10px;
  justify-self: center;
  grid-row: 1;
}

#search_engine .searching {
  padding: 20px;
  justify-self: center;
  grid-row: 2;
}

#llm {
  grid-column: 2;
  grid-row: 2;
  height: 400px;
  width: 95%;
  display: grid;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr;
  margin-bottom: 30px;
  justify-self: center;
  border-radius: 12px;
  justify-content: center;
  background-color: var(--background-cards);
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
  color: var(--background-page);
  justify-self: center;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#homeButton {
  color: var(--font-color);
  background-color: var(--background-cards);
  height: 40px;
}
</style>
