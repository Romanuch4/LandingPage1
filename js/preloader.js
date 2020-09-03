(() => {
  const loadWindow = () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
      preloader.style.zIndex = -1;
      document.querySelector('body').classList.remove('overflow');
    }, 500);
  };
  window.addEventListener('load', loadWindow);

  if (document.readyState === 'complete') {
    window.removeEventListener('load', loadWindow);
  }
})();
