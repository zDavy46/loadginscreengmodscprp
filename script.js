// Cambio immagini di sfondo (temi SCP)
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
setInterval(changeBackground, 10000);

// Testo di caricamento (a tema SCP)
const loadingPhrases = [
  "> Caricamento mappa: Settore-██...",
  "> Verifica credenziali...",
  "> Avvio sistemi di contenimento...",
  "> Connessione a Database Sicuro...",
  "> Accesso autorizzato. Benvenuto, Dott. █████."
];
let currentPhrase = 0;

function updateLoadingText() {
  document.getElementById('loading-text').textContent = loadingPhrases[currentPhrase];
  currentPhrase = (currentPhrase + 1) % loadingPhrases.length;
}
setInterval(updateLoadingText, 3500);
