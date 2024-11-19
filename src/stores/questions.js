import { defineStore } from "pinia";

// Reminder: 'data' parameter is the unique id of the store
export const useQuestionsStore = defineStore("questions", {
  // State holds the data
  state: () => ({
    questions: {
      1: {
        1: "island 1 question 1",
        2: "island 1 question 2",
      },
      2: {
        1: "Qual è il pianeta più caldo del sistema solare?",
        2: "Come trasformano le piante il sole in energia?",
      },
      3: {
        1: "island 3 question 1",
        2: "island 3 question 2",
      },
      4: {
        1: "island 4 question 1",
        2: "island 4 question 2",
      },
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
