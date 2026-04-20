// gatsby-browser.js
import React from 'react';
import './src/styles/global.css';
//import primereact icons css file and one of its theme (aura)
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import PrimeProvider from "./src/providers/PrimeProvider";


//highlighJS
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css"; // pick your theme

export const onRouteUpdate = () => {
  if (typeof window !== "undefined") {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }
};

export const wrapRootElement = ({ element }) => (
  <PrimeProvider>{element}</PrimeProvider>
);