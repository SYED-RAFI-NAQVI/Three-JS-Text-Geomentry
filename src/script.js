import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { Mesh } from "three";

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// image OnLoad && Texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/textures/matcaps/1.png");

// Fonts
const fontLoader = new THREE.FontLoader();
fontLoader.load("/fonts/Snacker.json", (font) => {
  const name = prompt("yourName???");
  const textGeometry = new THREE.TextGeometry(`${name}`, {
    font: font,
    size: 0.8,
    height: 0.4,
    curveSegments: 42,
    bevelEnabled: true,
    bevelThickness: 0.002,
    bevelSize: 0.001,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  textGeometry.center();
  const material = new THREE.MeshNormalMaterial();
  const textMaterial = new THREE.MeshMatcapMaterial();
  textMaterial.matcap = texture;
  const text = new THREE.Mesh(textGeometry, textMaterial);
  const donutGeomentry = new THREE.TorusBufferGeometry(0.4, 0.2, 20, 45);
  const boxGeomentry = new THREE.BoxBufferGeometry(0.2, 0.2, 0.2);
  const coneGeomentry = new THREE.ConeBufferGeometry(0.1, 0.3, 32);
  const sphereGeomentry = new THREE.SphereBufferGeometry(0.1, 16, 26);
  for (let i = 0; i < 50; i++) {
    const donut = new THREE.Mesh(donutGeomentry, material);
    const box = new THREE.Mesh(boxGeomentry, material);
    const cone = new THREE.Mesh(coneGeomentry, material);
    const sphere = new THREE.Mesh(sphereGeomentry, material);
    donut.position.x = (Math.random() - 0.5) * 10;
    donut.position.y = (Math.random() - 0.5) * 10;
    donut.position.z = (Math.random() - 0.5) * 10;
    box.position.x = (Math.random() - 0.5) * 10;
    box.position.y = (Math.random() - 0.5) * 10;
    box.position.z = (Math.random() - 0.5) * 10;
    cone.position.x = (Math.random() - 0.5) * 10;
    cone.position.y = (Math.random() - 0.5) * 10;
    cone.position.z = (Math.random() - 0.5) * 10;
    sphere.position.x = (Math.random() - 0.5) * 10;
    sphere.position.y = (Math.random() - 0.5) * 10;
    sphere.position.z = (Math.random() - 0.5) * 10;

    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;
    box.rotation.x = Math.random() * Math.PI;
    box.rotation.y = Math.random() * Math.PI;
    cone.rotation.x = Math.random() * Math.PI;
    cone.rotation.y = Math.random() * Math.PI;

    scene.add(donut, box, cone, sphere);
  }

  scene.add(text);
});

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

//  Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Double Click to Zoom
window.addEventListener("dblclick", () => {
  !document.fullscreenElement
    ? canvas.requestFullscreen()
    : document.exitFullscreen();
});

// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = -4;
camera.position.y = 4;
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Mouse Cursor
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = e.clientY / sizes.height - 0.5;
});

// Tweeks
// gui.add(sphere.position, "x", -20, 20, 0.1);

// Animate
const tick = () => {
  // Update objects
  // box.rotation.reorder('YXZ')
  // box.rotation.y += 1 * elapsedTime
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  // camera.position.y = cursor.y * 5
  // camera.lookAt();

  // Update Orbital Controls
  controls.update();

  // Render
  renderer.render(scene, camera);
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
