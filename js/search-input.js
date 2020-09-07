(function () {
  const searchBlock = document.querySelector('.search');
  const searchOpenIcon = searchBlock.querySelector('.search__icon');
  const searchCloseIcon = searchBlock.querySelector('.search__close');

  const showSearch = () => {
    searchBlock.style.overflow = 'visible';
    searchOpenIcon.classList.add('hidden');
    searchOpenIcon.nextSibling.nextSibling.classList.add('active');
    searchCloseIcon.classList.add('active');
  };

  const closeSearch = () => {
    searchBlock.style.overflow = 'hidden';
    searchCloseIcon.classList.remove('active');
    searchOpenIcon.classList.remove('hidden');
    searchOpenIcon.nextSibling.nextSibling.classList.remove('active');
  };

  const showSearchClick = (evt) => {
    if (evt.code === 'Enter') {
      showSearch();
    }
  };

  const closeSearchClick = (evt) => {
    if (evt.code === 'Enter') {
      closeSearch();
    }
  };

  searchOpenIcon.addEventListener('click', showSearch);
  searchCloseIcon.addEventListener('click', closeSearch);
  searchOpenIcon.addEventListener('keydown', (evt) => showSearchClick(evt));
  searchCloseIcon.addEventListener('keydown', (evt) => closeSearchClick(evt));
})();
