# Struzi2d

**Struzi2d** is a modular game engine built in TypeScript with 2D rendering powered by [PIXI.js](https://pixijs.com/). Designed as a proof of concept to explore the limits of JavaScript, Struzi2d is not intended to replace existing engines but to demonstrate what can be achieved with modern web technologies.

Struzi2d is divided into three main modules:

- **Engine Package (Headless):**  
  This is the core of the engine, responsible for low-level rendering, layer management, resource handling, and overall infrastructure. Being headless (without a built-in GUI), it can be used in a variety of environments or serve as the foundation for other tools.

- **App Wrapper:**  
  A pre-configured package that leverages the engine to create a game. It acts as the integration layer between the engine core and the game logic, providing a simplified API so that developers can focus on crafting content rather than handling low-level details.

- **App Desktop (IDE):**  
  A full-featured desktop application that serves as the integrated development environment (IDE) for Struzi2d. This tool streamlines the creation, editing, and debugging of games, offering an all-in-one interface to accelerate development and iteration.

## Key Features

- **Clean and Modular Architecture:**  
  Struzi2d organizes its functionalities into independent modules—such as the *LayerManager* for handling scene layers, the *ResourceManager* for image loading and caching, and the *DataManager* for game data management. This separation allows each component to be optimized or replaced without affecting the rest of the system.

- **Advanced 2D Rendering with PIXI.js:**  
  Leveraging PIXI.js, the engine provides robust support for 2D rendering, including management of multiple layers (e.g., `lower`, `middle`, `upper`, `overlay`, and `extra`). This makes it easy to organize visual elements and apply special effects.

- **Optimized Performance via Native Modules:**  
  For performance-critical tasks—such as physics simulations, audio processing, or pathfinding algorithms—it is possible to integrate native modules written in high-performance languages (e.g., Rust or C++) through bindings (using Neon or N-API) in Node.js.

- **Modern Development with TypeScript:**  
  Developed entirely in TypeScript, Struzi2d benefits from strong typing, enhanced code safety, and improved maintainability while utilizing the latest features of modern JavaScript.

## Dependencies and Technologies

- **TypeScript:**  
  The primary language for development, ensuring robust and clear code.

- **Node.js:**  
  The runtime environment that powers the headless engine and facilitates integration with native modules.

- **PIXI.js:**  
  The 2D rendering library that underpins the creation and management of scene layers and graphical elements.

- **Vite (optional):**  
  A modern build tool that provides fast bundling, hot module replacement, and an agile development experience.

- **Native Modules (e.g., Rust):**  
  For intensive processing tasks like physics, audio, or AI, integrating modules written in Rust (or similar languages) via Neon or N-API can yield significant performance benefits.

## Project Structure

The repository is organized as follows:

```bash
/struzi2d
├── /packages
│   └── engine        # Headless core of the engine (Struzi2d).
├── /apps
│   ├── desktop       # IDE for creating, editing, and debugging games.
│   ├── docs          # Documentation, guides, and usage examples.
│   └── wrapper       # Pre-configured game package using the engine.
├── package.json      # Root-level dependency and build management.
├── LICENSE           # License file.
└── README.md         # This file.
```

## Installation and Setup:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/whoisclebs/struzi2d.git
   cd struzi2d
   ```

## Contribution

Contributions are highly welcome! To contribute:

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b my-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin my-feature`).
5. Open a Pull Request.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

## Contact

For questions, suggestions, or support, please contact hello [at] whoisclebs.com or open an issue in this repository.

---

**Struzi2d** is continuously evolving. Follow updates and join the community to help improve this engine further!
