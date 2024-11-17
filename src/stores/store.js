import { defineStore } from "pinia";

// Reminder: 'data' parameter is the unique id of the store
export const useDataStore = defineStore("data", {
  // State holds the data
  state: () => ({
    questionAnswers: [], // Array to store question-answer pairs
    currentQuestion: null, // Store the current question
    score: 0,
  }),

  // Actions define methods to manipulate the state
  actions: {
    // Action to add a question-answer pair
    addQuestionAnswer(question, answer) {
      this.questionAnswers.push({ question, answer });
    },

    setCurrentQuestion(question) {
      this.currentQuestion = question;
    },

    // To retrieve all question-answer pairs
    getAllQuestionAnswers() {
      return this.questionAnswers;
    },
    setScore(newScore) {
      this.score = newScore;
    },
    incrementScore(points) {
      this.score += points;
    },
  },
  getters: {},
});
