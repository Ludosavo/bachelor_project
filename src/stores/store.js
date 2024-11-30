import { defineStore } from "pinia";
import download from "downloadjs";

// Reminder: 'data' parameter is the unique id of the store
export const useDataStore = defineStore("data", {
  // State holds the data
  state: () => ({
    questionAnswers: [],
    visitedLinks: [],
    geminiQuestionAnswer: [],
    currentQuestion: null,
    score: 0,
    islands: {
      1: { id: 1, isComplete: false },
      2: { id: 2, isComplete: false },
      3: { id: 3, isComplete: false },
      4: { id: 4, isComplete: false },
      5: { id: 5, isComplete: false },
    },
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
    // retrieve all question-answer pairs
    getAllQuestionAnswers() {
      return this.questionAnswers;
    },
    // score data
    setScore(newScore) {
      this.score = newScore;
    },
    incrementScore(points) {
      this.score += points;
    },
    addVisitedLink(link) {
      this.visitedLinks.push(link);
    },
    // island state:
    completeIsland(islandId) {
      // Mark the island as completed
      const island = this.islands[islandId];
      if (island) {
        island.isComplete = true; // This ensures the `isComplete` flag is set to true
      }
    },
    resetIslands() {
      this.islands.forEach((island) => {
        island.isComplete = false;
      });
    },
    addQuestionAnswerGemini(questionGem, answerGem) {
      this.geminiQuestionAnswer.push({ questionGem, answerGem });
    },
    // export all data
    export() {
      download(
        JSON.stringify(
          {
            answers: this.questionAnswers,
            score: this.score,
            visitedLinks: this.visitedLinks,
            questionAnswersGemini: this.geminiQuestionAnswer,
          },
          null,
          4
        ),
        "data.json",
        "text/json"
      );
    },
  },
});
