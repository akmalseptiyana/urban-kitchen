import "regenerator-runtime";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "../styles/main.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  menuButton: document.getElementById("hamburgerButton"),
  closeButton: document.getElementById("closeButton"),
  drawer: document.getElementById("navigationDrawer"),
  content: document.getElementById("mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
