<template>
    <div>
      <h1>Generatore di Testo</h1>
      <input v-model="inputText" placeholder="Scrivi qualcosa" />
      <button @click="generateText">Genera</button>
      <p v-if="result">Risultato: {{ result }}</p>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const inputText = ref("");
      const result = ref("");
      const error = ref("");
  
      const generateText = async () => {
        try {
          const API_URL = "https://api-inference.huggingface.co/models/gpt2";
  
          const response = await fetch(API_URL, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_HUGGING_FACE_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: inputText.value }),
          });
  
          if (!response.ok) throw new Error("Errore nella chiamata API");
  
          const data = await response.json();
          result.value = data[0]?.generated_text || "Errore nella generazione.";
          error.value = "";
        } catch (err) {
          error.value = err.message;
          result.value = "";
        }
      };
  
      return { inputText, result, error, generateText };
    },
  };
  </script>
  