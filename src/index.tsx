import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import "bootstrap/dist/js/bootstrap.min.js";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const Particles = require("particlesjs");

window.onload = function() {
    Particles.init({
      selector: '.background',
      connectParticles: true,
      maxParticles: 70
    });
  };

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
