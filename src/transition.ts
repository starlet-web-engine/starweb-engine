import { flushPointer    } from "./input/pointer.js";
import { flushKeyboard   } from "./input/keyboard.js";

export function transition<T>(frame: T, audio: { playSound(name: string): void }, fn?: () => void): T {
  audio.playSound("button");
  fn?.();
  flushPointer();
  flushKeyboard();
  return frame;
}
