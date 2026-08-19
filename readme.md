# 🧊 Three.js 3D Text & Geometry Playground

An interactive 3D scene built with **Three.js** and bundled with Webpack. The application prompts the user for their name and renders it as a floating 3D text object, surrounded by a chaotic, colorful array of hundreds of floating geometric shapes.

## ✨ Features

- **Interactive 3D Text:** Prompts you for your name (`prompt()`) and dynamically generates a `TextGeometry` mesh, centered in the scene.
- **Matcap Textures:** The text material uses `MeshMatcapMaterial` with a loaded PNG texture, faking complex lighting and reflections performantly.
- **Geometry Particle System:** Generates 200 random floating objects around the text (Torus, Box, Cone, and Sphere geometries) utilizing `MeshNormalMaterial` for a colorful, rainbow-like shading effect based on the normals.
- **Orbit Controls:** Click and drag to orbit around the 3D scene, scroll to zoom in and out.
- **Responsive & Fullscreen:** The WebGL canvas automatically resizes to the window. Double-click anywhere on the canvas to toggle fullscreen mode!

## 🛠️ Built With

- **Three.js** — 3D WebGL library
- **JavaScript (ES6+)**
- **Webpack** — Module bundler handling JS, CSS, and static assets
- **dat.gui** — Debug UI (available for tweaking properties)

## 🚀 How to Run (Local Development)

Because this project uses Webpack and loads local static assets (like fonts and textures), it must be run via a development server.

1. Ensure you have Node.js installed.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Webpack development server:
   ```bash
   npm run dev
   ```
4. Open your browser to the URL provided by the dev server (usually `http://localhost:8080`).

## 📁 Project Structure

```text
Three-JS-Text-Geomentry/
├── bundler/         # Webpack configuration files (dev, prod, common)
├── src/             # Source code
│   ├── script.js    # Core Three.js logic (scene, geometries, meshes, materials, animation loop)
│   ├── index.html   # HTML template
│   └── style.css    # Canvas styling
└── static/          # Static assets
    ├── fonts/       # JSON fonts for Three.js TextGeometry (e.g., Snacker)
    └── textures/    # Matcap PNG textures
```

## 💡 What I Learned

This project was a deep dive into WebGL and the 3D space using Three.js (June 2021):
- **3D Coordinate Systems:** Positioning and rotating objects randomly in a 3D space using `Math.random()`.
- **Geometries & Materials:** The difference between standard geometries and BufferGeometries for performance, and experimenting with visual materials like `MeshNormalMaterial` and `MeshMatcapMaterial`.
- **Animation Loops:** Understanding `requestAnimationFrame` and creating a constant tick/render loop.
- **User Interaction:** Implementing `OrbitControls` for camera manipulation and handling window resize events to update the camera's aspect ratio and the renderer's projection matrix.
