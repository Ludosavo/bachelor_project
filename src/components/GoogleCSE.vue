<template>
  <div class="results">
    <input
      type="text"
      style="width: 90%"
      v-model="query"
      @keyup.enter="performSearch"
      placeholder="Search..."
    />
    <button @click="performSearch">Cerca</button>

    <div v-if="results">
      <h3>Search Results:</h3>
      <ul>
        <li v-for="result in results" :key="result.cacheId">
          <a :href="result.link" @click="saveLink" target="_blank">{{ result.title }}</a>
          <p>{{ result.snippet }}</p>
        </li>
      </ul>
    </div>
    <div v-else-if="noResults">
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useDataStore } from "@/stores/store";
export default {
  data() {
    return {
      query: "",
      results: null,
      noResults: false,
      startTime: null,
    };
  },
  methods: {
    async performSearch() {
      if (!this.query) return;

      if (!this.startTime) {
        this.startTime = new Date();
      }
      const API_KEY = import.meta.env.API_KEY; 
      const CX = import.meta.env.CX; 

      try {
        const response = await axios.get(
          `https://www.googleapis.com/customsearch/v1`,
          {
            params: {
              key: API_KEY,
              cx: CX,
              q: this.query,
            },
          }
        );

        if (response.data.items && response.data.items.length > 0) {
          this.results = response.data.items;
          console.log(this.query);
          this.noResults = false;
          console.log(this.results);
          // Computing the time
          this.computeSearchTime();
          
        } else {
          this.results = null;
          this.noResults = true;
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    },
    computeSearchTime() {
      const elapsedTime = new Date() - this.startTime; 

      if (elapsedTime < 120000) {
        // Controlla se sotto i 2 minuti
        this.score += 10;
      } else {
        this.score += 5;
      }

      // saving in store
      const dataStore = useDataStore(); 
      if (elapsedTime < 120000) { 
        dataStore.incrementScore(10); 
      } else {
        dataStore.incrementScore(5);
      }
      // Resetta il tempo di inizio per future ricerche
      this.startTime = null;
    },
    saveLink(e) {
      searchedLink = e.target.href;
      this.dataStore.addVisitedLink(searchedLink);
    }
  },
};
</script>

<style>
/* Contenitore principale centrato */
.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: var(--background-page);
}

/* Barra di ricerca */
.search-bar {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 90%;
  max-width: 600px;
  margin-bottom: 20px;
}

input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 6px 20px;
  background-color: var(--red-coral);
  color: var(--white-cloud);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #b32734;
}

/* Lista dei risultati */
.results {
  margin-top: 20px;
  text-align: center;
  width: 90%;
  max-width: 800px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 15px;
  padding: 15px;
  background-color: var(--background-cards);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

li a {
  font-size: 25px;
  color: rgb(4, 27, 63);
  text-decoration: none;
  font-weight: bold;
}

li a:visited {
  color: rgb(106, 8, 8);
}

li p {
  margin: 10px 0 0 0;
  font-size: 22px;
  color: #333;
}

h3 {
  color: var(--red-coral);
  margin-bottom: 20px;
}

/* No risultati */
.no-results {
  font-size: 20px;
  color: var(--red-coral);
}
</style>
