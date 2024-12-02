import { defineStore } from "pinia";

// Reminder: 'data' parameter is the unique id of the store
export const useQuestionsStore = defineStore("questions", {
  // State holds the data
  state: () => ({
    questions: {
      //sport
      1: {
        1: "Quanti giocatori ci sono in una squadra di pallavolo?",
        2: "Quale squadra di baseball ha più anni di attività?",
      },
      //natura
      2: {
        1: "Quanti leopardi delle nevi sono rimasti?",
        2: "Come viene classificato il leopardo delle nevi?",
      },
      //geogragia
      3: {
        1: "Qual è il vulcano attivo più antico?",
        2: "In quale paese in Asia si trova il vulcano più piccolo?",
      },
      //scienza
      4: {
        1: "Quanto velocemente può andare un tornado?",
        2: "Quali sono gli altri nomi del tornado?",
      },
      //finale
      5:{
        1: "Quale animale è più veloce tra lo struzzo e il colibrì?",
      }
    },

    pageId: null,
    questionId: null,
  }),
  getters: {
    currentQuestion() {
      if (Number.isInteger(this.pageId))
        return this.questions[this.pageId][this.questionId];
      return "";
    },
    isLast() {
      return (
        Number.isInteger(this.pageId) &&
        Object.keys(this.questions[this.pageId]).length == this.questionId
      );
    },
  },
  // Actions define methods to manipulate the state
  actions: {
    setIds(pageId, questionId) {
      this.pageId = Number.parseInt(pageId);
      this.questionId = Number.parseInt(questionId);
    },
  },
});
