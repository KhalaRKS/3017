import "./assets/styles/animaciones.css";
import "./assets/styles/mediaqueries.css";
import "./assets/styles/styles.css";

import { cartActionsInit } from "./src/cart/cart";
import { menuInterfaceInit } from "./src/menu-interface/menu-interface";
import { productsSectionInit } from "./src/products-section/products-section";
import { scrollEffectInit } from "./src/scroll-effects/scroll";
import { typewriterInit } from "./src/typewriter/typewriter";

//Función inicializadora
const init = () => {
  productsSectionInit()
  cartActionsInit()
  menuInterfaceInit()
  scrollEffectInit()
  typewriterInit()
};

init();
