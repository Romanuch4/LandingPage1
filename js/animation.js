(function () {
  window.addEventListener('load', function () {
    gsap.registerPlugin(ScrollTrigger);
    const classesArray = ['.scene', '.lessons__item', '.profiles__item', '.news__article'];
    classesArray.forEach((elem) =>
      gsap.from(elem, {
        duration: 1,
        opacity: 0,
        y: 'random(-300, 300)',
        stagger: 0.25,
        easy: 'back.out(1.7)',
        scrollTrigger: {
          trigger: elem,
          toggleActions: 'restart none restart none',
        },
      }),
    );
  });
})();
