function initCarousel() {
  let rightBtn = document.querySelector('.carousel__arrow_right');
  let leftBtn = document.querySelector('.carousel__arrow_left');
  let carusel = document.querySelector('.carousel__inner');
  let imgCount = document.querySelectorAll('.carousel__inner .carousel__slide').length
  let itemWitdth = carusel.clientWidth;
  let counter = 0;
  // let imagesLength = imgAll.length;
  // console.log(imagesLength) 

  carusel.style.transform = 'translateX(' + `${-itemWitdth * counter}px)`;
  leftBtn.style.display = 'none';

  rightBtn.addEventListener('click', () => {
    counter++;
    if (counter > 0) leftBtn.style.display = '';
    if (counter >= imgCount - 1) { rightBtn.style.display = 'none'; leftBtn.style.display = '' }
        // else if (counter <= 2) { rightBtn.style.display = ''; leftBtn.style.display = 'none' };
    carusel.style.transform = 'translateX(' + `${-itemWitdth * counter}px)`;
  })

  leftBtn.addEventListener('click', () => {
    counter--;
    if (counter <= imgCount - 1) rightBtn.style.display = '';
    if (counter <= 0) { rightBtn.style.display = ''; leftBtn.style.display = 'none' }
    // else if (counter <= 2) { rightBtn.style.display = ''; leftBtn.style.display = 'none' };
    carusel.style.transform = 'translateX(' + `${-itemWitdth * counter}px)`;
  })
}
