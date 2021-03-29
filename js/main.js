const hamburgBtn = document.querySelector('.hamburg-menu');
const navBarTop = document.querySelector('.navigation-block-top');
const ingElements = document.querySelectorAll('tr.component');
const ingDescs = document.querySelectorAll('.about-block');



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

// const showIngDesc = event => {
//   let tab = event.target;
//   let tabId = tab.dataset.id;

//   for (let i = 0; i < ingElements.length; i++) {
//     ingElements[i].classList.remove('activetab');
//     ingElements[tabId - 1].classList.add('activetab');

//     ingDescs[i].classList.remove('active-block');
//     ingDescs[tabId - 1].add('active');
//   }
// };

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
