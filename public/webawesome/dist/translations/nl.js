import "../chunks/chunk.S3NIS5MO.js";
import "../chunks/chunk.X26X6GTV.js";
import {
  registerTranslation
} from "../chunks/chunk.KT4NGSPG.js";
import "../chunks/chunk.CLOX737Y.js";

// src/translations/nl.ts
var translation = {
  $code: "nl",
  $name: "Nederlands",
  $dir: "ltr",
  carousel: "Carrousel",
  clearEntry: "Invoer wissen",
  close: "Sluiten",
  copied: "Gekopieerd",
  copy: "Kopi\xEBren",
  currentValue: "Huidige waarde",
  error: "Fout",
  goToSlide: (slide, count) => `Ga naar slide ${slide} van ${count}`,
  hidePassword: "Verberg wachtwoord",
  loading: "Bezig met laden",
  nextSlide: "Volgende dia",
  numOptionsSelected: (num) => {
    if (num === 0) return "Geen optie geselecteerd";
    if (num === 1) return "1 optie geselecteerd";
    return `${num} opties geselecteerd`;
  },
  pauseAnimation: "Animatie pauzeren",
  playAnimation: "Animatie afspelen",
  previousSlide: "Vorige dia",
  progress: "Voortgang",
  remove: "Verwijderen",
  resize: "Formaat wijzigen",
  scrollableRegion: "Scrollbaar gebied",
  scrollToEnd: "Scroll naar einde",
  scrollToStart: "Scroll naar begin",
  selectAColorFromTheScreen: "Selecteer een kleur van het scherm",
  showPassword: "Laat wachtwoord zien",
  slideNum: (slide) => `Schuif ${slide}`,
  toggleColorFormat: "Wissel kleurnotatie",
  zoomIn: "Inzoomen",
  zoomOut: "Uitzoomen"
};
registerTranslation(translation);
var nl_default = translation;
export {
  nl_default as default
};
