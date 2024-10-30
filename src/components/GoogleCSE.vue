<template>
  <div class="results">
    <input
      type="text"
      v-model="query"
      @keyup.enter="performSearch"
      placeholder="Search..."
    />
    <button @click="performSearch">Search</button>

    <div v-if="results">
      <h3>Search Results:</h3>
      <ul>
        <li v-for="result in results" :key="result.cacheId">
          <a :href="result.link" target="_blank">{{ result.title }}</a>
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

export default {
  data() {
    return {
      query: "",
      results: null,
      noResults: false,
    };
  },
  methods: {
    async performSearch() {
      if (!this.query) return;

      const API_KEY = "AIzaSyD6BwDsOxp2WT8vOn9wM832djLqsqzxYnM"; // Replace with your actual API Key
      const CX = "c5090c2a5c6884f0e"; // Replace with your Search Engine ID

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
          this.noResults = false;
        } else {
          this.results = null;
          this.noResults = true;
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    },
  },
};
</script>

<style scoped>

input {
  align-self: center;
  padding: 8px;
  margin-right: 8px;
  width: 300px;
}
button {
  padding: 8px 12px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 20px;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  width: 80%;
  color: rgb(0, 0, 0);
  margin: 16px 0;
}

li a{
  color:rgb(4, 42, 103);
}

li :visited{
  color: rgb(106, 8, 8);
}
</style>
