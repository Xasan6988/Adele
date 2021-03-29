const hamburgBtn = document.querySelector('.hamburg-menu');
const navBarTop = document.querySelector('.navigation-block-top');

const showTopBar = () => {
  navBarTop.classList.toggle('active');
};

hamburgBtn.addEventListener('click', showTopBar);



// smooth scroll

(function () {
  const scrollBtns = document.querySelectorAll('button.btn');

  for (const scrollBtn of scrollBtns) {
    scrollBtn.addEventListener('click', event => {
      event.preventDefault();
      const id = scrollBtn.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
})();
