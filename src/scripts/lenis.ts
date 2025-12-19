import Lenis from "lenis";

export function initLenis() {
  if ((window as any).__lenis) return;

  const lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,

    // Alternativa moderna (si quieres suavizado en touch)
    // syncTouch: true,
    // syncTouchLerp: 0.1,
    // touchInertiaMultiplier: 20,
  });

  (window as any).__lenis = lenis;

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  window.addEventListener("resize", () => lenis.resize());
}
