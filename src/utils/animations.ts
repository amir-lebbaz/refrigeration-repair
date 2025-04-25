// Import AOS (Animate On Scroll) library
export const initAnimations = () => {
  // We use dynamic import because AOS is a client-side library
  import('aos').then((AOS) => {
    AOS.default.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  });
};