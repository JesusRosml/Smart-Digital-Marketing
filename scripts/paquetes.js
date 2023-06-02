const button1 = document.getElementById('service-oculto');
const cerrarOne = document.getElementById('cerrrarOne');
const container = document.querySelector('.containerAbsoluteOne');

const button2 = document.getElementById('service-oculto1');
const cerrarOne1 = document.getElementById('cerrrarOne1');
const container1 = document.querySelector('#containerAbsoluteOne1');

button1.addEventListener('click', function() {
  container.style.display = 'block';
  button1.style = 'color: #607D8B';
  container.style.position = 'absolute';
});

cerrarOne.addEventListener('click', function() {
  container.style.display = 'none';
  button1.style = 'color: #212121';
})

//Segunda paquete
button2.addEventListener('click', function() {
  container1.style.display = 'block';
  button2.style = 'color: #607D8B';
  container1.style.position = 'absolute';
});

cerrarOne1.addEventListener('click', function() {
  container1.style.display = 'none';
  button2.style = 'color: #212121';
})



const header = document.querySelector('header');
const input = document.querySelector('.container-items');
const button = document.querySelector('.container-textContact');

window.addEventListener('scroll', function() {

  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;


  if (scrollPosition > 0) {
    header.style.background = '#FFFFFF';
    input.style.background = 'rgba(238, 238, 238)';
    button.style.background = 'rgba(238, 238, 238)';
  } else {
    input.style.background = 'rgba(238, 238, 238, 0.3)';
    header.style.background = 'transparent';
    button.style.background = '#FFFFFF';
  }
});
