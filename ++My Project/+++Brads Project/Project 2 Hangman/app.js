const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');


const figureParts = document.querySelectorAll('.figure-part');



const words = ['magic', 'blueballs', 'chicken', 'bunny', 'rainbow'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['b', 'u', 'n', 'n', 'y'];
const wrongLetters = [];


//ShowHidden//
function displayWord() {
  wordEl.innerHTML = `${selectedWord
    .split('')
    .map(letter => `<span class="letter">
${correctLetters.includes(letter) ? letter : ''}</span>`).join('')
    }
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');


  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulation! You Won!! :D';
    popup.style.display = 'flex';
  }
}

displayWord();