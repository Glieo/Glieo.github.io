<script setup lang="ts">
import { onMounted } from "vue";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import waterUrl from "../assets/waternormals.jpg";

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;
let controls, sky: Sky, water: Water, sun: THREE.Vector3;


onMounted(() => {
  init();
  animate();
  window.addEventListener("resize", onWindowResize);
});

function init() {
  // render
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  document.body.appendChild(renderer.domElement);
  // scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    20000
  );
  camera.position.set(30, 30, 100);
  // controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.target.set(0, 10, 0);
  controls.minDistance = 40.0;
  controls.maxDistance = 200.0;
  controls.update();
  // Ocean
  initOcean();
  function initOcean() {
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        waterUrl,
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });
    water.rotation.x = -Math.PI / 2;
    scene.add(water);

  }
  // Sky
  initSky();
  function initSky() {
    sun = new THREE.Vector3();
    sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);
    const skyUniforms = sky.material.uniforms;
    skyUniforms["turbidity"].value = 10;
    skyUniforms["rayleigh"].value = 2;
    skyUniforms["mieCoefficient"].value = 0.005;
    skyUniforms["mieDirectionalG"].value = 0.8;
    const parameters = { elevation: 2, azimuth: 180 };
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    function updateSun() {
      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);
      sun.setFromSphericalCoords(1, phi, theta);
      sky.material.uniforms["sunPosition"].value.copy(sun);
      water.material.uniforms["sunDirection"].value.copy(sun).normalize();
      scene.environment = pmremGenerator.fromScene(scene).texture;
    }
    updateSun();

  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  const time = performance.now() * 0.001;
  water.material.uniforms["time"].value += 1.0 / 60.0;
  renderer.render(scene, camera);
}
</script>

<template></template>

<style scoped></style>
