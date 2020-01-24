import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import welcomeImagen from '../../resources/imagen.svg';
//import { Test } from './WelcomeArea.styles';

export default class WelcomeArea extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="welcomeArea">
        <div className="welcomeImageArea">
          <img src={welcomeImagen} alt="" className="welcomeImage"/>
        </div>
        <div className="welcomeTextArea">
          <h5>Hola, {this.props.nombreUsuario}:</h5>
          <p className="importantParagraph">¡Bienvenido a Plankton!</p>
          <p>Esta es tu página de inicio donde podrás ver rápidamente tus próximas tareas y acceder a tus proyectos más importantes.</p>
          <p>Hemos creado unas cuantas tareas para ayudarte a comenzar.</p>
        </div>
        <div className="doneBtn">
          <a className="btn" href="#">Entendido</a>
        </div>
      </div>
    );
  }
}