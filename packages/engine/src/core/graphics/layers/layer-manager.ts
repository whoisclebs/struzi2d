import { Container } from "pixi.js";
export const LAYER_LABELS = ["lower", "middle", "upper", "overlay", "extra"] as const;
export const CONTAINVER_LABEL = "container" as const;
export class LayerManager {

  private readonly _container: Container;
  
  constructor() {
    this._container = new Container({label: CONTAINVER_LABEL});
    this.init();
  }

  init(): void {
    LAYER_LABELS.forEach((label) => {
        const layer = new Container({label: label});
        this._container.addChild(layer);
    });
  }

  public get container(): Container {
    return this._container;
  }

  public addToLayer(object: Container, label: LayerLabel): void {
    const layer = this.getLayer(label);
    layer.addChild(object);
  }

  public removeFromLayer(object: Container, label: LayerLabel): void {
    const layer = this.getLayer(label);
    layer.removeChild(object);
  }

  public clearLayer(label: LayerLabel): void {
    const layer = this.getLayer(label);
    layer.removeChildren();
  }

  public getLayer(label: LayerLabel): Container {
    const layer = this._container.getChildByLabel(label);
    if (!layer) {
        throw new Error(`Layer with label ${label} not found`);
    }
    return layer;
  }

  public getAllLayers(): Container[] {
    return this._container.children;
  }

}
export type LayerLabel = typeof LAYER_LABELS[number];