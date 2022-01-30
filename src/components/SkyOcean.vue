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
    const parameters = {
      time: 6, //时间
      elevation: -90, //高度
      azimuth: 0, //方位角
      turbidity: 10, //浊度
      rayleigh: 2, //瑞利散射
    };
    updateTime();
    function updateTime() {
      let myDate = new Date();
      parameters.time = myDate.getHours() + (myDate.getMinutes() * 5) / 300;
      if (parameters.time >= 6 && parameters.time < 18) {
        parameters.elevation = parameters.time * 15 - 180;
        parameters.turbidity = normalRandom(5, 2);
        parameters.rayleigh = normalRandom(2.5, 1);
      } else {
        parameters.elevation = -parameters.time * 15;
        parameters.turbidity = normalRandom(0.05, 0.02);
        parameters.rayleigh = normalRandom(0.005, 0.002);
      }
      // updateSun
      const skyUniforms = sky.material.uniforms;
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      skyUniforms["turbidity"].value = parameters.turbidity;
      skyUniforms["rayleigh"].value = parameters.rayleigh;
      const phi = THREE.MathUtils.degToRad(parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);
      sun.setFromSphericalCoords(1, phi, theta);
      sky.material.uniforms["sunPosition"].value.copy(sun);
      water.material.uniforms["sunDirection"].value.copy(sun).normalize();
      scene.environment = pmremGenerator.fromScene(scene).texture;
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  water.material.uniforms["time"].value += 1.0 / 60.0;
  renderer.render(scene, camera);
}

function onWindowResize() {
  renderer.setSize(window.innerWidth - 16, window.innerHeight - 16);
  camera.aspect = (window.innerWidth - 16) / (window.innerHeight - 16);
  camera.updateProjectionMatrix();
}

// 生成正态分布
function normalRandom(mean: number, std: number) {
  let u = 0.0,
    v = 0.0,
    w = 0.0,
    c = 0.0;
  do {
    u = Math.random() * 2 - 1.0;
    v = Math.random() * 2 - 1.0;
    w = u * u + v * v;
  } while (w == 0.0 || w >= 1.0);
  c = Math.sqrt((-2 * Math.log(w)) / w);
  let normal = mean + u * c * std;
  return normal;
}
</script>

<template></template>

<style scoped></style>
