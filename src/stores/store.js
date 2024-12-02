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
    startTimes: {},
    completedTimes: {},
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
    setStartTime(islandId, time) {
      this.startTimes[islandId] = time;
    },
    computeCompletionTime(islandId) {
      const startTime = this.startTimes[islandId];
      const endTime = new Date(); 
      if (!startTime) return "Tempo di inizio non registrato.";

      const totalMs = endTime - new Date(startTime);
      const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((totalMs % (1000 * 60)) / 1000);

      const options = {
        timeZone: "Europe/Zurich",
        weekday: "long", 
        year: "numeric",
        month: "long", 
        day: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit", 
        hour12: false, 
      };

      // Convert string to make it "readable"
      const formattedEndTime = endTime.toLocaleString('it-IT', options);

      this.completedTimes[islandId] = { minutes, seconds };

      return `Tempo completato: ${minutes} minuti e ${seconds} secondi. Ora di completamento: ${formattedEndTime}`;
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
        island.isComplete = true;
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
      const data = {
        question_answers: this.questionAnswers,
        score: this.score,
        visitedLinks: this.visitedLinks,
        questionAnswersGemini: this.geminiQuestionAnswer,
        startTimes: this.startTimes,
        completedTimes: this.completedTimes,
      };

      // Converti dati => JSON
      const jsonString = JSON.stringify(data, null, 4);

      // Blob per gestire download file JSON
      const blob = new Blob([jsonString], { type: "application/json" });

      // link scaricare il file
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "gameData.json";

      // Simula il clic sul link per avviare il download
      link.click();
    },
  },
});
