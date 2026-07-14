import { createGameCanvas } from "./canvas.js";
import { initKeyboard     } from "./input/keyboard.js";
import { initPointer      } from "./input/pointer.js";

export function bootstrapGame() {
  const { canvas, ctx, size } = createGameCanvas();

  initKeyboard();
  initPointer(canvas);

  return { canvas, ctx, size };
}
