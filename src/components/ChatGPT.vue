<template>
  <div class="chat-container">
    <div class="chat-box">
      <ul>
        <li v-for="(message, index) in messages" :key="index" :class="message.role">
          <strong v-if="message.role === 'user'">You:</strong>
          <strong v-else>ChatGPT:</strong>
          {{ message.content }}
        </li>
      </ul>
    </div>
    <textarea
      v-model="userMessage"
      placeholder="Scrivi un messaggio..."
      @keyup.enter="sendMessage"
    ></textarea>
    <button @click="sendMessage">Invia</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userMessage: "", // Messaggio dell'utente
      messages: [],    // Array per tenere traccia della conversazione
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userMessage.trim()) return;

      // Aggiungi il messaggio dell'utente
      this.messages.push({ role: "user", content: this.userMessage });

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo", // Modello da usare
            messages: [
              ...this.messages.map((msg) => ({
                role: msg.role,
                content: msg.content,
              })),
            ], // Passa l'intera conversazione
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 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`, // Sostituisci con la tua chiave API
            },
          }
        );

        // Aggiungi la risposta di ChatGPT
        const gptMessage = response.data.choices[0].message.content;
        this.messages.push({ role: "assistant", content: gptMessage });

        // Resetta l'input dell'utente
        this.userMessage = "";
      } catch (error) {
        console.error("Errore durante la richiesta a ChatGPT:", error);
        alert("Si è verificato un errore, riprova più tardi.");
      }
    },
  },
};
</script>

<style>
.chat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.chat-box {
  width: 90%;
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

textarea {
  width: 90%;
  height: 50px;
  margin-top: 10px;
  resize: none;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
}

.user {
  text-align: right;
  color: blue;
}

.assistant {
  text-align: left;
  color: green;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
