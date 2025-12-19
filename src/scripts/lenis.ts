import Lenis from "lenis";

export function initLenis() {
  if ((window as any).__lenis) return;

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  (window as any).__lenis = lenis;

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const refresh = () => lenis.resize();

  window.addEventListener("resize", refresh);
  document.addEventListener("astro:page-load", refresh);
  document.addEventListener("astro:after-swap", refresh);
}
