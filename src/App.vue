<script setup lang="ts">
import ThreeWebgl from "./components/ThreeWebgl.vue";
</script>

<template>
  <ThreeWebgl />
</template>

<style>
body {
  margin: 8px;
}
#app {
  font-family: Caslon, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@font-face {
  font-family: "Caslon";
  src: url(./assets/fonts/CaslonClassico.OTF) format("opentype");
}
</style>
