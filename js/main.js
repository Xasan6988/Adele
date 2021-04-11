const hamburgBtn = document.querySelector('.hamburg-menu');
const navBarTop = document.querySelector('.navigation-block-top');
const ingElements = document.querySelectorAll('tr.component');
const ingDescs = document.querySelectorAll('.about-block');
const slides = document.querySelectorAll('.panel');
const caruselBtns = document.querySelectorAll('.arrow');


// Slider for result-region
let Slider = {
  count: 0,
  show(n) {
    for (let slide of slides) {
      slide.style.display = 'none';
    }
    console.log(slides[Slider.count])
    slides[this.count].style.display = 'flex';
  },
  next() {
    this.show(checkNext());
  },
  prev() {
    this.show(checkPrev());
  },
};

const checkNext = function(count){
  count = Slider.count;
  if (count > 1.5) {
    return Slider.count = 0;
  } else {
    return Slider.count++;
  }
};

const checkPrev = function(count){
  count = Slider.count;
  if (count <= 0) {
    return Slider.count = 2;
  } else {
    return Slider.count--;
  }
}

for (caruselBtn of caruselBtns) {
  caruselBtn.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target.closest('.arrow');
    console.log(target);

    if (target.classList.contains('right-button')) {
      Slider.next();
      console.log(Slider.count);
    };
    if (target.classList.contains('left-button')) {
      Slider.prev();
      console.log(Slider.count);
    };
});
}

// tabs for facts-region
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
