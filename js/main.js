const hamburgBtn = document.querySelector('.hamburg-menu');
const navBarTop = document.querySelector('.navigation-block-top');
const ingElements = document.querySelectorAll('tr.component');
const ingDescs = document.querySelectorAll('.about-block');
const changePanels = document.querySelectorAll('.panel');
const caruselBtns = document.querySelectorAll('.arrow');



// No complete carusel

// const caruselNext = () => {
//   for (i = 0; i < changePanels.length; i++) {
//     changePanels[i].style.display = 'none';
//     changePanels[i + 1].style.display = 'flex';
//   };
// };

// const caruselPrev = () => {
//   for (i = 2; i != 0; i--) {
//     changePanels[i].style.display = 'none';
//     changePanels[i - i].style.display = 'flex';
//   };
// };


// for (caruselBtn of caruselBtns) {
//   caruselBtn.addEventListener('click', event => {
//     event.preventDefault();
//     target = event.target;
//     if (target.classList.contains('right-button')) {
//       caruselNext();
//     } else {
//       caruselPrev();
//     };
//   });
// };



const showIngDesc = event => {
  let tr = event.target.parentNode;
  let trId = tr.dataset.id

  for (let i = 0; i < ingElements.length; i++) {
    ingElements[i].classList.remove('activetab');
    ingElements[trId - 1].classList.add('activetab');

    ingDescs[i].classList.remove('active-block');
    ingDescs[trId - 1].classList.add('active-block');
  };
};

for (ingElement of ingElements) {
  ingElement.addEventListener('click', showIngDesc)
};


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
