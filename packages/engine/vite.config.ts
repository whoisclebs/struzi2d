import { defineConfig } from "vite";
import * as path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@data', replacement: path.resolve(__dirname, 'data') },
    ]
  },
});