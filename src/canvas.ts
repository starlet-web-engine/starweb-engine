/** Options for configuring the game canvas. */
export interface CanvasOptions {
  /** Enables or disables `imageSmoothingEnabled` on the canvas context. Default: `true`. */
  imageSmoothing?: boolean;
}

/** The result of {@link createGameCanvas}. */
export interface GameCanvas {
  /** The underlying canvas element. */
  canvas:  HTMLCanvasElement;
  /** The 2D rendering context for the canvas. */
  ctx:     CanvasRenderingContext2D;
  /** Canvas width and height. */
  size:    { readonly width: number; readonly height: number };
  /** Removes the canvas from the DOM and cleans up the resize listener. */
  destroy: () => void;
}

/** Creates a full-window canvas and appends it to `document.body`.
 *
 * The canvas is automatically resized to fill the window on creation,
 * and on every subsequent `resize` event.
 *
 * @returns The canvas element, its 2D context, and a `destroy` function
 * to remove the canvas and clean up the resize listener.
 *
 * @throws {Error} If a 2D canvas context cannot be obtained.
 */
export function createGameCanvas(
  { imageSmoothing = true }: CanvasOptions = {}
): GameCanvas {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D canvas context not found");

  const size = { width: 0, height: 0 };

  const onResize = () => {
    const dpr     = window.devicePixelRatio ?? 1;
    size.width   = window.innerWidth;
    size.height  = window.innerHeight;
    canvas.width  = size.width  * dpr;
    canvas.height = size.height * dpr;
    canvas.style.width  = `${size.width}px`;
    canvas.style.height = `${size.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = imageSmoothing;
  }
  window.addEventListener("resize", onResize);
  onResize();

  let destroyed = false;
  return {
    canvas,
    ctx,
    size,
    destroy: () => {
      if (destroyed) return;
      destroyed = true;
      window.removeEventListener("resize", onResize);
      canvas.remove();
    }
  };
}
