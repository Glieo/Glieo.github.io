<script setup lang="ts">
import { onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { init_SkyOcean } from "./SkyOcean";
import { init_Birds } from "./Birds";

let renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  controls;
let animate_SkyOcean: () => void, animate_Birds: () => void;

onMounted(() => {
  init();
  animate();
  window.addEventListener("resize", onWindowResize);
});

function init() {
  // render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth - 16, window.innerHeight - 16);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  document.body.appendChild(renderer.domElement);
  // scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    55,
    (window.innerWidth - 16) / (window.innerHeight - 16),
    1,
    20000
  );
  camera.position.set(0, 30, 100);
  // controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 50, 0);
  controls.minDistance = 40.0;
  controls.maxDistance = 200.0;
  controls.update();

  animate_SkyOcean = init_SkyOcean(scene, renderer);
  animate_Birds = init_Birds(scene, renderer);
}

function animate() {
  requestAnimationFrame(animate);

  animate_SkyOcean();
  animate_Birds();

  renderer.render(scene, camera);
}

function onWindowResize() {
  renderer.setSize(window.innerWidth - 16, window.innerHeight - 16);
  camera.aspect = (window.innerWidth - 16) / (window.innerHeight - 16);
  camera.updateProjectionMatrix();
}
</script>

<template></template>

<style scoped></style>
