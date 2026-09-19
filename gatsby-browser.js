// gatsby-browser.js
import React from 'react';
import './src/styles/global.css';

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

