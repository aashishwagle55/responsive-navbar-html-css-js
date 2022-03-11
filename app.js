const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // animate nav links js
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.4s ${index / 10 + 0.4}s forwards`;
      }
    });

    burger.classList.toggle('toggle-burger');
  });
};

navSlide();
