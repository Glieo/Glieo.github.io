<script setup lang="ts">
import ReloadPromptVue from "./components/ReloadPrompt.vue";
import ThreejsWebgl from "./components/ThreejsWebgl/index.vue";
</script>

<template>
  <ReloadPromptVue />
  <ThreejsWebgl />
</template>

<style>
body {
  margin: 8px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
