import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import waterUrl from "./waternormals.jpg";
let sky: Sky, water: Water, sun: THREE.Vector3;

// Ocean
function initOcean(scene: THREE.Scene) {
  const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
  water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load(waterUrl, function (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }),
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
function initSky(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
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

function animate_SkyOcean() {
  water.material.uniforms["time"].value += 1.0 / 60.0;
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

export function init_SkyOcean(
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer
) {
  initOcean(scene);
  initSky(scene, renderer);
  return animate_SkyOcean
}
