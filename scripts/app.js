const header = document.querySelector('header'),
      input = document.querySelector('.container-items'),
      button = document.querySelector('.container-textContact');

//Variables del slider de comentarios

const btnLeft = document.querySelector('.btn-left'),
      btnRight = document.querySelector('.btn-right'),
      slider = document.querySelector('#slider'),
      sliderSection = document.querySelectorAll('.slider-section');

window.addEventListener('scroll', function() {

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;


  if (scrollPosition > 0) {
    header.style.background = '#FFFFFF';
    header.style.boxShadow = '0 2px 6px #0000001f';
    input.style.background = 'rgba(238, 238, 238)';
    button.style.background = 'rgba(238, 238, 238)';
  } else {
    input.style.background = 'rgba(238, 238, 238, 0.3)';
    header.style.background = 'transparent';
    button.style.background = '#FFFFFF';
    header.style.boxShadow = 'none'
  }
});

//Codigo de slider comentarios 
btnLeft.addEventListener('click', e => moveToLeft());
btnRight.addEventListener('click', e => moveToRight());

setInterval(() => {
  moveToRight()
}, 3000)

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

const moveToRight = () => {
  if(counter >= sliderSection.length -1) {
    operacion = 0;
    counter = 0;

    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'none';

    return;
  } 

  counter++;
  operacion = operacion + widthImg;
  
  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = 'all ease .6s'
}

const moveToLeft = () => {
  counter--;

  if(counter < 0) {
    counter = sliderSection.length - 1;
    operacion = widthImg * (sliderSection.length -1);

    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'none';

    return;
  } 

  operacion = operacion - widthImg;

  slider.style.transform = `translate(-${operacion}%)`;
  slider.style.transition = 'all ease .6s'
}

//Preguntas y respuestas 
const buttonsDesplegable = document.querySelector('#answer-button');
const containerRequest= document.querySelector('#desplegable-container');

const containerDesplegable = document.querySelector('#container-top');
const buttonsDesplegable2 = document.querySelector('#answer-button2');
const containerReques2 = document.querySelector('#desplegable-container2');

const containerDesplegable2 = document.querySelector('#container-top2');
const buttonsDesplegable3 = document.querySelector('#answer-button3');
const containerReques3 = document.querySelector('#desplegable-container3');


buttonsDesplegable.addEventListener('click', () => {
   moveToBottom();
});

buttonsDesplegable2.addEventListener('click', () => {
  moveToBottom2();
});

buttonsDesplegable3.addEventListener('click', () => {
  moveToBottom3();
});

let counterNew = 0;

const moveToBottom = () => {
  counterNew++;
  
  if (counterNew === 1 || counterNew === 0) {
    containerDesplegable.style.margin = '10px auto';
    containerDesplegable.style.transition = 'all ease .3s'

    containerRequest.style.margin = '0px auto';
    containerRequest.style.transition = 'all ease .3s'

  } else if (counterNew === 2) {
    containerDesplegable.style.margin = '-60px auto';
    containerRequest.style.margin = '-90px auto';
    counterNew = 2 - counterNew;
    
    console.log(counterNew);
  }
};

let counterNew2 = 0;

const moveToBottom2 = () => {
  counterNew2++;
  
  if (counterNew2 === 1 || counterNew2 === 0) {
    containerRequest.style.margin = '-90px auto';
    containerReques2.style.transition = 'all ease .3s';
    containerDesplegable.style.margin = '-60px auto';
    containerDesplegable2.style.margin = '60px auto';
    containerReques3.style.transition = 'all ease .3s'

    containerReques2.style.margin = '0px auto';
    containerReques2.style.transition = 'all ease .3s';

  } else if (counterNew2 === 2) {
    containerDesplegable2.style.margin = '10px auto';
    containerDesplegable.style.margin = '-60px auto';
    containerReques2.style.margin = '-90px auto';
    counterNew2 = 2 - counterNew2;
    
    console.log(counterNew);
  }
};

let counterNew3 = 0;

const moveToBottom3 = () => {
  counterNew3++;
  
  if (counterNew3 === 1 || counterNew3 === 0) {
    containerReques2.style.margin = '-90px auto';
    containerReques2.style.transition = 'all ease .3s';
    containerDesplegable2.style.margin = '-60px auto';


    containerReques3.style.margin = '0px auto';
    containerReques3.style.transition = 'all ease .3s'

  } else if (counterNew3 === 2) {
    containerDesplegable2.style.margin = '-60px auto';
    containerReques3.style.margin = '-90px auto';
    counterNew3 = 2 - counterNew3;
    
  }
};