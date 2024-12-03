import { defineStore } from "pinia";

// Reminder: 'data' parameter is the unique id of the store
export const useAnswersStore = defineStore("answers", {
  // State holds the data
  state: () => ({
    answers: {
        1:{
            1: 6,
            2: "Atlanta Braves",
        },
        2:{
            1: "tra i 3000 e i 7000",
            2: "Vulnerabile",
        },
        3:{
            1: "Etna",
            2: "Filippine",
        },
        4:{
            1: "Circa 500km/h",
            2: "Tromba d'aria, Twister, Ciclone",
        },
        5:{
            1:"Colibrì",
        }
    }
    }),
});