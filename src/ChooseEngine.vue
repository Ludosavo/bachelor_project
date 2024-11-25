<template>
  <div>
    <div id="card" v-if="!selectedCard">
      <h3>SCEGLI TRA:</h3>
      <div id="google" @click="selectCard('google')">GOOGLE</div>
      <div id="gemini" @click="selectCard('gemini')">GEMINIAI</div>
    </div>

    <!-- Google Card -->
    <div v-if="selectedCard === 'google'" class="card-display">
      <div class="engine">Google:</div>
      <div class="searching">
        <GoogleCSE />
      </div>
      <button @click="goBack">
        <font-awesome-icon
          icon="arrow-left"
          style="font-size: xx-large; color: #f4f4f9"
        />
      </button>
    </div>

    <!-- Gemini Card -->
    <div v-if="selectedCard === 'gemini'" class="card-display">
      <div class="engine">GeminiAI:</div>
      <div class="searching">
        <GeminiAI />
      </div>
      <button @click="goBack">
        <font-awesome-icon
          icon="arrow-left"
          style="font-size: xx-large; color: #f4f4f9"
        />
      </button>
    </div>
  </div>
</template>

<script>
import GeminiAI from "./components/GeminiAI.vue";
import GoogleCSE from "./components/GoogleCSE.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      selectedCard: null, // Track the selected card
    };
  },
  methods: {
    selectCard(card) {
      this.selectedCard = card; // Set the selected card
    },
    goBack() {
      this.selectedCard = null; // Reset to the main menu
    },
  },
  components: {
    GoogleCSE,
    GeminiAI,
    FontAwesomeIcon,
  },
};
</script>

<style>
#card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.4fr 1fr;
  width: 95%;
  font-size: 30px;
  text-align: center;
  justify-self: center;
  background-color: #e9c46a;
  color: #e63946;
  border-radius: 8px;
  height: 400px;
}

#card h3 {
  justify-self: center;
  grid-column: 1 / span 2;
}

#google,
#gemini {
  position: relative; /* Enable positioning for pseudo-element */
  align-content: center;
  border: 2px solid #e63946;
  justify-self: center;
  width: 60%;
  border-radius: 8px;
  padding: 20px;
  grid-column: span 1;
  margin-bottom: 40px;
  overflow: hidden; /* Ensure the wave doesn't spill outside */
  z-index: 1; /* Maintain stacking context */
  transition: color 0.3s ease-in-out;
}

#google:hover,
#gemini:hover {
  color: #f4f4f9;
  border: 2px solid #f4f4f9;
}

#google::before,
#gemini::before {
  content: "";
  position: absolute;
  top: 0%; /* Start below the div */
  left: 0;
  width: 100%; /* Cover the full width */
  height: 100%; /* Cover the full height */
  background: #0077b6;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
  z-index: -1; /* Place the wave behind the text */
}

#google:hover::before,
#gemini:hover::before {
  transform: translateY(0); /* Move into the full div */
}
</style>
