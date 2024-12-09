import { defineStore } from "pinia";

// Reminder: 'data' parameter is the unique id of the store
export const useAnswersStore = defineStore("answers", {
  state: () => ({
    answers: {
      1: {
        1: 6,
        2: "Atlanta Braves",
      },
      2: {
        1: "tra i 3000 e i 7000",
        2: "Vulnerabile",
      },
      3: {
        1: "Etna",
        2: "Filippine",
      },
      4: {
        1: "Circa 500km/h",
        2: "Tromba d'aria, Twister, Ciclone",
      },
      5: {
        1: "Colibrì",
      },
    },
  }),
  actions: {
    export() {
      const answers = {
        answers : this.answers,
      };

      const jsonString = JSON.stringify(answers, null, 4);

      // Blob per gestire download file JSON
      const blob = new Blob([jsonString], { type: "application/json" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "answers.json";

      link.click();
    },
  },
});
