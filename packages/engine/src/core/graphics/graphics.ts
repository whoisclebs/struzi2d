import { Application, Graphics, Container } from "pixi.js";
import { LayerLabel, LayerManager } from "@/core/graphics/layers";

export class GraphicsEngine {

  private _app: Application;
  private _layerManager: LayerManager;

  constructor() {
    this._app = new Application();
    this._layerManager = new LayerManager();
  }

  async init(options = { width: 800, height: 600, backgroundColor: 0x1099bb }) {
    await this._app.init(options);
    this._app.stage.addChild(this._layerManager.container);
    document.body.appendChild(this._app.canvas);
  }

  get stage(): Container {
    return this._app.stage;
  }

  get layers(): Container {
    return this._layerManager.container;
  }

  addObject(object: Graphics, layer: LayerLabel) {
    this._layerManager.addToLayer(object, layer);
  }

  removeObject(object: Graphics, layer: LayerLabel) {
    this._layerManager.removeFromLayer(object, layer);
  }

  clear() {
    this._app.stage.removeChildren();
  }

  resize(width: number, height: number) {
    this._app.renderer.resize(width, height);
    this._app.canvas.style.width = `${width}px`;
    this._app.canvas.style.height = `${height}px`;
  }

}
