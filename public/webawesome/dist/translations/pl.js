import "../chunks/chunk.S3NIS5MO.js";
import "../chunks/chunk.X26X6GTV.js";
import {
  registerTranslation
} from "../chunks/chunk.KT4NGSPG.js";
import "../chunks/chunk.CLOX737Y.js";

// src/translations/pl.ts
var translation = {
  $code: "pl",
  $name: "Polski",
  $dir: "ltr",
  carousel: "Karuzela",
  clearEntry: "Wyczy\u015B\u0107 wpis",
  close: "Zamknij",
  copied: "Skopiowane",
  copy: "Kopiuj",
  currentValue: "Aktualna warto\u015B\u0107",
  error: "B\u0142\u0105d",
  goToSlide: (slide, count) => `Przejd\u017A do slajdu ${slide} z ${count}`,
  hidePassword: "Ukryj has\u0142o",
  loading: "\u0141adowanie",
  nextSlide: "Nast\u0119pny slajd",
  numOptionsSelected: (num) => {
    if (num === 0) return "Nie wybrano opcji";
    if (num === 1) return "Wybrano 1\xA0opcj\u0119";
    return `Wybrano ${num} opcje`;
  },
  pauseAnimation: "Wstrzymaj animacj\u0119",
  playAnimation: "Odtw\xF3rz animacj\u0119",
  previousSlide: "Poprzedni slajd",
  progress: "Post\u0119p",
  remove: "Usun\u0105\u0107",
  resize: "Zmie\u0144 rozmiar",
  scrollableRegion: "Obszar przewijalny",
  scrollToEnd: "Przewi\u0144 do ko\u0144ca",
  scrollToStart: "Przewi\u0144 do pocz\u0105tku",
  selectAColorFromTheScreen: "Pr\xF3bkuj z ekranu",
  showPassword: "Poka\u017C has\u0142o",
  slideNum: (slide) => `Slajd ${slide}`,
  toggleColorFormat: "Prze\u0142\u0105cz format",
  zoomIn: "Powi\u0119ksz",
  zoomOut: "Pomniejsz"
};
registerTranslation(translation);
var pl_default = translation;
export {
  pl_default as default
};
