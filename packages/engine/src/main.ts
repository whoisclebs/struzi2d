import { GraphicsEngine } from "@/core/graphics";
import CONSTANTS from "@/data/constants.json";

(async () => {
  const engine = new GraphicsEngine();
  await engine.init(CONSTANTS.graphics);
})();