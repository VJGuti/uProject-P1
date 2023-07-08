const themeSelect = document.querySelector('#theme-select');

themeSelect.addEventListener('change', () => {
  const body = document.querySelector('body');
  
  if (themeSelect.value === 'light') {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else if (themeSelect.value === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.remove('dark-theme');
  }
});

const fontSelect = document.querySelector('#font-select');

fontSelect.addEventListener('change', () => {
  const body = document.querySelector('body');
  
  body.style.fontFamily = fontSelect.value;
});

const form = document.querySelector('#search-form');
const wordInfo = document.querySelector('#word-info');

form.addEventListener('submit', event => {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  const input = document.querySelector('#search-input');
  const word = input.value; // Obtiene el valor del campo de entrada
  // Reemplaza la URL y los parámetros según la API que estés utilizando
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => response.json())
    .then(data => {
      // Verifica si la API devolvió resultados
      if (data.length > 0) {
        // Procesa los datos recibidos de la API
        const definition = data[0].meanings[0].definitions[0].definition;
        wordInfo.textContent = definition;
      } else {
        // Muestra un mensaje si no se encontraron resultados
        wordInfo.textContent = 'No se encontraron resultados';
      }
    });
    const form = document.querySelector('#search-form');
const audio = document.querySelector('#pronunciation-audio');

form.addEventListener('submit', event => {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  const input = document.querySelector('#search-input');
  const word = input.value; // Obtiene el valor del campo de entrada

  // Verifica si hay un archivo de audio para la palabra buscada
  if (word == "hola") {
    audio.src = "audios/hola.mp3"; // Reemplaza con la URL del archivo de audio para "hola"
  } else if (word == "no") {
    audio.src = "audios/no.mp3"; // Reemplaza con la URL del archivo de audio para "no"
  } else if (word == "good") {
    audio.src = "audios/good.mp3"; // Reemplaza con la URL del archivo de audio para "morning"
  } else {
    audio.src = '';
  }
});

const pronunciationButton = document.querySelector('#pronunciation-button');

pronunciationButton.addEventListener('click', () => {
  // Verifica si el elemento de audio tiene una fuente válida
  if (audio.src) {
    // Reproduce el archivo de audio
    audio.play();
  }
});
    })