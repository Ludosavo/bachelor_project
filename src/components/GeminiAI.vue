<template>
  <h1 class="mb-5">Ciao sono GeminiAI, come posso aiutarti?</h1>

  <form class="mb-5" @submit.prevent="fetchAnswer">
    <div id="wrapper_textarea">
      <textarea
        name="question"
        id="question"
        cols="30"
        rows="10"
        v-model="question"
      ></textarea>
    </div>
    <button type="submit" :disabled="!question" id="ask">
      {{ `${isLoading ? "asking gemini..." : "Cerca"}` }}
    </button>
  </form>
  <div class="mb-10">
    <AIAnswer :answer="answer" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGetGenerativeModelGP } from "../config/useGetGenerativeModelGP.js";
import AIAnswer from "../components/AIAnswer.vue";
import { useDataStore } from "@/stores/store.js";

const question = ref("");
const answer = ref("");
const isLoading = ref(false);
const dataStore = useDataStore();

const fetchAnswer = async () => {
  answer.value = "";
  isLoading.value = true;

  try {
    answer.value = await useGetGenerativeModelGP(question.value);
    dataStore.addQuestionAnswerGemini(question.value, answer.value);
  } catch (error) {
    console.log({ error });
  } finally {
    isLoading.value = false;
    question.value = "";
  }
};
</script>

<style lang="scss" scoped>
.mb-5 {
  justify-items: center;
  align-self: baseline;
}
h1.mb-5 {
  grid-row: 2;
  margin-bottom: 2rem;
  justify-self: center;
  color: #000000;
}
#wrapper_text{
  align-items: center;
}

textarea#question {
  height: 40px;
  width: 100%;
  border-radius: 4px;
}
.mb-10 {
  grid-row: 4;
  margin-bottom: 5rem;
  justify-self: center;
  width: 80%;
  color: black;
  font-size: 25px;
}

button#ask {
  justify-self: center;
  background-color: #0077b6;
}
</style>
