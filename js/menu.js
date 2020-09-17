(() => {
  const menuIcon = document.querySelector('.burger'),
    menu = document.querySelector('.header__nav'),
    body = document.querySelector('body'),
    OPEN_MENU_CLASS = 'active',
    OVERFLOW__BODY = 'overflow',
    inputAfterMenu = document.querySelector('.main-screen__input');

  const showCloseMenu = () => {
    menuIcon.querySelector('svg').classList.toggle(OPEN_MENU_CLASS);
    menu.classList.toggle(OPEN_MENU_CLASS);
    body.classList.toggle(OVERFLOW__BODY);
    if (menu.classList.contains(OPEN_MENU_CLASS)) {
      menu.querySelector('.header__link').focus();
    }
    menu.querySelector('.search__close').addEventListener('keydown', function (evt) {
      if (evt.code === 'Tab') {
        evt.stopPropagation();
        menuIcon.focus();
      }
    });
  };

  const showCloseMenuClick = (evt) => {
    evt.stopPropagation();
    if (evt.code === 'Enter' || evt.code === 'Escape') {
      showCloseMenu();
    } else if (evt.shiftKey && evt.keyCode == 9) {
      menu.querySelector('.search__icon').focus();
    } else if (evt.code === 'Tab') {
      inputAfterMenu.focus();
    }
  };

  menuIcon.addEventListener('click', (evt) => showCloseMenu(evt));
  menuIcon.addEventListener('keydown', (evt) => showCloseMenuClick(evt));

  inputAfterMenu.addEventListener('keydown', function (evt) {
    if (evt.shiftKey && evt.keyCode == 9) {
      evt.stopPropagation();
      menuIcon.focus();
    }
  });
})();
