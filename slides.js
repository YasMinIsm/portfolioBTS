// var a = document.getElementsByTagName("a");
// var cfImg = document.getElementsByClassName("coverflow__image")

// var scaleI = 0;
// for (scaleI; scaleI < a.length; scaleI++) {
//   if (scaleI === 3) {
//     continue;
//   } else {
//     a[scaleI].style.cursor = "default";
//     a[scaleI].addEventListener("click", prevDef);
//   }
// }

// function prevDef(e) {
//   e.preventDefault();
// }

// function forScale(coverflowPos) {
//   for (scaleI = 0; scaleI < a.length; scaleI++) {
//     a[scaleI].style.cursor = "default";
//     a[scaleI].addEventListener("click", prevDef);
//   }
//   for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
//     if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
//       cfImg[scaleI].parentElement.style.cursor = "pointer";
//       cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
//     }
//   }
// }
// //end added by Chase

// function setupCoverflow(coverflowContainer) {
//   var coverflowContainers;

//   if (typeof coverflowContainer !== "undefined") {
//     if (Array.isArray(coverflowContainer)) {
//       coverflowContainers = coverflowContainer;
//     } else {
//       coverflowContainers = [coverflowContainer];
//     }
//   } else {
//     coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
//   }

//   coverflowContainers.forEach(function(containerElement) {
//     var coverflow = {};
//     var prevArrows, nextArrows;

//     //capture coverflow elements
//     coverflow.container = containerElement;
//     coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
//     coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

//     //set indicies on images
//     coverflow.images.forEach(function(coverflowImage, i) {
//       coverflowImage.dataset.coverflowIndex = i + 1;
//     });

//     //set initial position
//     coverflow.container.dataset.coverflowPosition = coverflow.position;

//     //get prev/next arrows
//     prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
//     nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

//     //add event handlers
//     function setPrevImage() {
//       coverflow.position = Math.max(1, coverflow.position - 1);
//       coverflow.container.dataset.coverflowPosition = coverflow.position;
//       //call the functin forScale added
//       forScale(coverflow.position);
//     }

//     function setNextImage() {
//       coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
//       coverflow.container.dataset.coverflowPosition = coverflow.position;
//       //call the function Chase added
//       forScale(coverflow.position);
//     }

//     function jumpToImage(evt) {
//       coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
//       coverflow.container.dataset.coverflowPosition = coverflow.position;
//       //start added by Chase
//       setTimeout(function() {
//         forScale(coverflow.position);
//       }, 1);
//       //end added by Chase
//     }

//     function onKeyPress(evt) {
//       switch (evt.which) {
//         case 37: //left arrow
//           setPrevImage();
//           break;
//         case 39: //right arrow
//           setNextImage();
//           break;
//       }
//     }
//     prevArrows.forEach(function(prevArrow) {
//       prevArrow.addEventListener('click', setPrevImage);
//     });
//     nextArrows.forEach(function(nextArrow) {
//       nextArrow.addEventListener('click', setNextImage);
//     });
//     coverflow.images.forEach(function(image) {
//       image.addEventListener('click', jumpToImage);
//     });
//     window.addEventListener('keyup', onKeyPress);
//   });
// }

// setupCoverflow();
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const next2 = document.querySelector('#next2');
const prev2 = document.querySelector('#prev2');
const next3 = document.querySelector('#next3');
const prev3 = document.querySelector('#prev3');
const next4 = document.querySelector('#next4');
const prev4 = document.querySelector('#prev4');
const next5 = document.querySelector('#next5');
const prev5 = document.querySelector('#prev5');
const next6 = document.querySelector('#next6');
const prev6 = document.querySelector('#prev6');
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.slide.current.zoo');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.slide.current.zoo');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const nextSlide2 = () => {
  const current = document.querySelector('.slide.current.genshin');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide2 = () => {
  const current = document.querySelector('.slide.current.genshin');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};


const prevSlide3 = () => {
  const current = document.querySelector('.slide.current.vva');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};
const nextSlide3 = () => {
  const current = document.querySelector('.slide.current.vva');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};
const nextSlide4 = () => {
  const current = document.querySelector('.slide.current.qa');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide4 = () => {
  const current = document.querySelector('.slide.current.qa');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};
const nextSlide5 = () => {
  const current = document.querySelector('.slide.current.stage1');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide5 = () => {
  const current = document.querySelector('.slide.current.stage1');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};
const nextSlide6 = () => {
  const current = document.querySelector('.slide.current.stage2');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide6 = () => {
  const current = document.querySelector('.slide.current.stage2');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

next.addEventListener('click', e => {
  nextSlide();
});

prev.addEventListener('click', e => {
  prevSlide();
});
next2.addEventListener('click', e => {
  nextSlide2();
});

prev2.addEventListener('click', e => {
  prevSlide2();
});

prev3.addEventListener('click', e => {
  prevSlide3();
});
next3.addEventListener('click', e => {
  nextSlide3();
});

prev4.addEventListener('click', e => {
  prevSlide4();
});
next4.addEventListener('click', e => {
  nextSlide4();
});

// prev5.addEventListener('click', e => {
//   prevSlide5();
// });
// next5.addEventListener('click', e => {
//   nextSlide5();
// });


// prev6.addEventListener('click', e => {
//   prevSlide6();
// });
// next6.addEventListener('click', e => {
//   nextSlide6();
// });


// slider stage

  stage1 = document.getElementById("showStage1");
  stage2 = document.getElementById("showStage2");

  stage1.addEventListener( 'click', function () {
    new Splide( '#image-slider' ).mount();

  } );
  
  stage2.addEventListener( 'click', function () {
    new Splide( '#image-slider2' ).mount();

  } );
