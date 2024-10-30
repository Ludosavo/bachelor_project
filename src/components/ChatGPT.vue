<template>
  <div class="chatgpt">
    <div class="chat-box">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <strong v-if="message.role === 'user'">TU:</strong>
          <strong v-else>ChatGPT:</strong>
          <p>{{ message.content }}</p>
        </div>
      </div>
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="Scrivi qui la tua domanda..."
      />
      <button @click="sendMessage">CERCA</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { askToChatGpt } from "@/config/chatgptcontroller";
export default {
  data() {
    return {
      userInput: "",
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userInput.trim()) return;

      // Add user's message to the messages list
      this.messages.push({
        role: "user",
        content: this.userInput,
      });

      try {
        // Make a request to OpenAI API
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              ...this.messages,
              { role: "user", content: this.userInput },
            ],
          },
          {
            headers: {
              //inserito chiave
              Authorization: `Bearer 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`,
              "Content-Type": "application/json",
            },
          }
        );

        // Add ChatGPT's response to the messages list
        const reply = response.data.choices[0].message.content;
        this.messages.push({
          role: "assistant",
          content: reply,
        });

        // Clear the user input field
        this.userInput = "";
      } catch (error) {
        console.error("Error communicating with ChatGPT API:", error);
      }
    },
  },
};
</script>

<style>
input {
  height: 25px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
}

button {
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  height: 31px;
}
.chat-box {
  text-align: center;
  justify-self: center;
  width: 400px;
}

.messages {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 20px;
}
</style>
