<template>
  <div>
    <vue-markdown v-if="answer" :source="answer" />
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown-render'

export default {
  components: {
    VueMarkdown,
  },
  props: {
    answer: {
      type: String,
      default: "Answer will be displayed here.",
    },
  },
};
</script>
