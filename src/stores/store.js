import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  // State holds the data
  state: () => ({
    questionAnswers: [], // Array to store question-answer pairs
    currentQuestion: null, // Store the current question
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

    // Optionally, an action to retrieve all question-answer pairs
    getAllQuestionAnswers() {
      return this.questionAnswers;
    },
  },
  getters:{
  },
});
