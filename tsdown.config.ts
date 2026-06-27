import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    'src/assets.ts',
    'src/canvas.ts',
    'src/input/keyboard.ts',
    'src/input/pointer.ts',
    'src/update.ts',
    'src/validate.ts',
  ],
  format: 'esm',
  dts: true,
  sourcemap: true,
  clean: true,
  unbundle: true,
});
