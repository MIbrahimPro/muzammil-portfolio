# Muzammil's Portfolio

A premium, highly interactive portfolio built for Muzammil, showcasing advanced web development capabilities in Shopify, Webflow, and Squarespace. The site features a cutting-edge 3D hero section, dynamic interactive backgrounds, and a modern glassmorphism aesthetic.

## 🚀 Features

- **3D Interactive Hero Canvas**: A fully physics-driven, rotating 3D carousel built with `Three.js` and `@react-three/fiber` that displays project cards in an interactive 3D orbit.
- **Dynamic Math-Based Background**: A highly optimized, custom HTML5 `<canvas>` background engine that draws a precise, mathematical dot grid. The grid actively reacts to the user's cursor, causing dots to rapidly expand into distinct square tiles.
- **Scroll-Linked Animations**: Integrated GSAP and Framer Motion logic that hooks directly into the user's scroll depth to trigger seamless fade-ins, translation reveals, and complex UI state changes (like the smart Navbar background).
- **Glassmorphism UI**: Beautiful, frosted glass overlays, subtle gradients, and perfectly balanced shadows to create a premium, modern aesthetic.
- **Responsive & Performance-Tuned**: Despite rendering real-time 3D environments and complex physics, the application is strictly optimized to run at a buttery 60 FPS across desktop and mobile. 

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **3D Engine:** Three.js, React Three Fiber, React Three Drei
- **Animations:** Framer Motion, GSAP, Lucide React (Icons)
- **Styling:** Vanilla CSS
- **Deployment:** Vercel

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MIbrahimPro/muzammil-portfolio.git
   cd muzammil-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🏗️ Project Architecture

- `src/App.jsx` - The core application file housing the main layout, state management, and primary sections.
- `src/index.css` - Global stylesheet defining the design system, typography, and utility classes.
- `public/` - Static assets including compressed `.webp` project thumbnails, videos, and favicon assets.

## 🎨 Configuration

The site includes exposed, easy-to-edit configuration blocks for core interactive elements. 
For example, to tweak the interactive dot grid, you can adjust the `config` object directly in `InteractiveGrid` inside `App.jsx`:

```javascript
const config = {
  dotSpacing: 18,         // Grid density
  dotSize: 3,             // Resting size
  maxBoxSize: 16,         // Hover expanded size
  activeRadius: 100,      // Cursor reach
  fadeSpeed: 0.05,        // Trail decay speed
  dotColor: "rgba(41, 41, 40, 0.06)" 
};
```
