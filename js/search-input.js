(function () {
  const searchBlock = document.querySelector('.search');
  const searchInput = document.querySelector('.search__input');
  const searchOpenIcon = searchBlock.querySelector('.search__icon');
  const searchCloseIcon = searchBlock.querySelector('.search__close');
  const inputAfterMenu = document.querySelector('.main-screen__input');
  const MOBILE_WIDTH = 1200;

  const showSearch = () => {
    searchBlock.style.overflow = 'visible';
    searchOpenIcon.classList.add('hidden');
    searchOpenIcon.nextSibling.nextSibling.classList.add('active');
    searchCloseIcon.classList.add('active');
    searchInput.focus();
  };

  const closeSearch = () => {
    searchBlock.style.overflow = 'hidden';
    searchCloseIcon.classList.remove('active');
    searchOpenIcon.nextSibling.nextSibling.classList.remove('active');
    searchOpenIcon.classList.remove('hidden');
  };

  const showSearchClick = (evt) => {
    if (evt.code === 'Enter') {
      showSearch();
    } else if (evt.code === 'Tab' && window.innerWidth >= MOBILE_WIDTH) {
      inputAfterMenu.focus();
    } else if (evt.code === 'Tab' && window.innerWidth < MOBILE_WIDTH) {
      document.querySelector('.burger').focus();
    }
  };

  const closeSearchClick = (evt) => {
    if (evt.code === 'Enter') {
      closeSearch();
    } else if (evt.shiftKey && evt.keyCode == 9) {
      searchOpenIcon.focus();
    }
  };

  searchOpenIcon.addEventListener('click', showSearch);
  searchCloseIcon.addEventListener('click', closeSearch);
  searchOpenIcon.addEventListener('keydown', (evt) => showSearchClick(evt));
  searchCloseIcon.addEventListener('keydown', (evt) => closeSearchClick(evt));
})();
