(function () {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const STICKY_CLASSNAME = 'sticky';
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (header.scrollHeight - scrollTop <= 0) {
      header.classList.add(STICKY_CLASSNAME);
    } else {
      header.classList.remove(STICKY_CLASSNAME);
    }
  });
})();
