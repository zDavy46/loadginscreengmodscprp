// Cambio immagini di sfondo
const backgrounds = [
  'bg1.jpg',
  'bg2.jpg',
  'bg3.jpg'
];
let currentBg = 0;

function changeBackground() {
  currentBg = (currentBg + 1) % backgrounds.length;
  document.getElementById('background').style.backgroundImage = `url('${backgrounds[currentBg]}')`;
}
setInterval(changeBackground, 8000);

// Testo di caricamento dinamico
const loadingPhrases = [
  "Caricamento mappa...",
  "Caricamento modelli...",
  "Caricamento NPC...",
  "Connessione al database...",
  "Quasi pronto!"
];
let currentPhrase = 0;

function updateLoadingText() {
  document.getElementById('loading-text').textContent = loadingPhrases[currentPhrase];
  currentPhrase = (currentPhrase + 1) % loadingPhrases.length;
}
setInterval(updateLoadingText, 3000);
