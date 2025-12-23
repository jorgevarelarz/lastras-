export const initMenu = () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  if (!menuIcon || !navLinks) {
    return;
  }

  const links = navLinks.querySelectorAll('li');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuIcon.classList.toggle('toggle');
    const expanded = menuIcon.classList.contains('toggle');
    menuIcon.setAttribute('aria-expanded', String(expanded));
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-active');
      menuIcon.classList.remove('toggle');
      menuIcon.setAttribute('aria-expanded', 'false');
    });
  });
};
