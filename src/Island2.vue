<script>
import ChatGPT from "./components/icons/ChatGPT.vue";
export default {
  components: {
    ChatGPT,
  },
};
</script>

<template>
  <main id="island1">
    <div id="search_engine">
      <div class="engine">Google:</div>
      <br />
      <div class="gcse-searchbox-only"></div>
    </div>
    <div id="llm">
      <div class="engine">ChatGPT:</div>
      <br />
      <ChatGPT />
    </div>
  </main>
  <RouterView />
</template>

<style scoped>
#island1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80vh;
  align-items: center;
}
.engine {
  align-content: center;
  font-size: 50px;
  justify-self: center;
  align-self: center;
}

#search_engine {
  grid-column: 1;
  justify-self: center;
}

#llm {
  justify-self: center;
  grid-column: 2;
}
</style>
