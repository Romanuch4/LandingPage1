(() => {
  const menuIcon = document.querySelector('.burger'),
    menu = document.querySelector('.header__nav'),
    body = document.querySelector('body'),
    OPEN_MENU_CLASS = 'active',
    OVERFLOW__BODY = 'mobile';

  const showCloseMenu = () => {
    menuIcon.querySelector('svg').classList.toggle(OPEN_MENU_CLASS);
    menu.classList.toggle(OPEN_MENU_CLASS);
    body.classList.toggle(OVERFLOW__BODY);
  };

  menuIcon.addEventListener('click', function (evt) {
    showCloseMenu(evt);
  });

  const showCloseMenuClick = (evt) => {
    if (evt.code === 'Enter') {
      showCloseMenu();
    }
  };

  menuIcon.addEventListener('keydown', (evt) => showCloseMenuClick(evt));
})();
