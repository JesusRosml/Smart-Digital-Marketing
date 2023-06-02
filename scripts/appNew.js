const header = document.querySelector('header'),
      input = document.querySelector('.container-items'),
      button = document.querySelector('.container-textContact');

//Variables de la ventana emergente 
const buttonWindow = document.querySelector('#buttonOne');
const windowSection1 = document.querySelector('#window-pop1');
const closeButton1 = document.querySelector('#closeButton1');

const buttonWindow1 = document.querySelector('#contratarContainer2');
const windowSection2 = document.querySelector('#window-pop2');
const closeButton2 = document.querySelector('#closeButton2');

const buttonWindow2 = document.querySelector('#desarrolloWeb');
const windowSection3 = document.querySelector('#window-pop3');
const closeButton3 = document.querySelector('#closeButton3');

const buttonWindow3 = document.querySelector('#ContratarSEO');
const windowSection4 = document.querySelector('#window-pop4');
const closeButton4 = document.querySelector('#closeButton4');

const buttonWindow4 = document.querySelector('#automatizacion');
const windowSection5 = document.querySelector('#window-pop5');
const closeButton5 = document.querySelector('#closeButton5');

const buttonWindow5 = document.querySelector('#capacitacionContainer');
const windowSection6 = document.querySelector('#window-pop6');
const closeButton6 = document.querySelector('#closeButton6');

window.addEventListener('scroll', function() {

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;


  if (scrollPosition > 0) {
    header.style.background = '#FFFFFF';
    header.style.boxShadow = '0 2px 6px #0000001f';
    button.style.background = 'rgba(238, 238, 238)';
  } else {
    input.style.background = 'rgba(238, 238, 238, 0.5)';
    header.style.background = 'transparent';
    button.style.background = '#FFFFFF';
  }
});

document.body.style.overflowX = "hidden";

//Codigo de la primera ventana emergente

buttonWindow.addEventListener('click', e => habilitarVentana());
closeButton1.addEventListener('click', e => cerrarVentana());

buttonWindow1.addEventListener('click', e => habilitarVentana2());
closeButton2.addEventListener('click', e => cerrarVentana2());

buttonWindow2.addEventListener('click', e => habilitarVentana3());
closeButton3.addEventListener('click', e => cerrarVentana3());

buttonWindow3.addEventListener('click', e => habilitarVentana4());
closeButton4.addEventListener('click', e => cerrarVentana4());

buttonWindow4.addEventListener('click', e => habilitarVentana5());
closeButton5.addEventListener('click', e => cerrarVentana5());

buttonWindow5.addEventListener('click', e => habilitarVentana6());
closeButton6.addEventListener('click', e => cerrarVentana6());


const habilitarVentana = () => {
  windowSection1.style.display = 'block';

  if(windowSection1.style.display === 'block') {
    document.body.style.overflow = "hidden";
  } 
}

const cerrarVentana = () => {
  windowSection1.style.display = 'none';
  document.body.style.overflowY = "auto";
}

//Codigo de la segunda ventana emergente

const habilitarVentana2 = () => {
  windowSection2.style.display = 'block';

  if(windowSection2.style.display === 'block') {
    document.body.style.overflow = "hidden";
  } 
}

const cerrarVentana2 = () => {
  windowSection2.style.display = 'none';
  document.body.style.overflowY = "auto";
}

//Codigo de la tercera ventana emergente
const habilitarVentana3 = () => {
  windowSection3.style.display = 'block';

  if(windowSection3.style.display === 'block') {
    document.body.style.overflow = "hidden";
  } 
}

const cerrarVentana3 = () => {
  windowSection3.style.display = 'none';
  document.body.style.overflowY = "auto";
}

//Codigo de la cuarta ventana emergente
const habilitarVentana4 = () => {
  windowSection4.style.display = 'block';

  if(windowSection4.style.display === 'block') {
    document.body.style.overflow = "hidden";
  } 
}

const cerrarVentana4 = () => {
  windowSection4.style.display = 'none';
  document.body.style.overflowY = "auto";
}

//Codigo de la quinta ventana emergente
const habilitarVentana5 = () => {
  windowSection5.style.display = 'block';

  if(windowSection4.style.display === 'block') {
    document.body.style.overflow = "hidden";
  } 
}

const cerrarVentana5 = () => {
  windowSection5.style.display = 'none';
  document.body.style.overflowY = "auto";
}

//Codigo de la sexta ventana emergente
const habilitarVentana6 = () => {
  windowSection6.style.display = 'block';

  if(windowSection4.style.display === 'block') {
    document.body.style.overflow = "hidden";
  } 
}

const cerrarVentana6 = () => {
  windowSection6.style.display = 'none';
  document.body.style.overflowY = "auto";
}