import React, { PureComponent } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';

import ProfileCheck from '../ProfileCheck/ProfileCheck';
import WelcomeArea from './WelcomeArea/WelcomeArea';
//import { Test } from './ContentArea.styles';

export default class ContentArea extends PureComponent { 
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
      <Col sm={7} className="contentArea">
        <WelcomeArea
          nombreUsuario={this.props.datos[0].nombreUsuario}
        />
        <ProfileCheck 
          perfil={this.props.datos[0].perfil} 
          changeState={this.props.changeState}
        />
      </Col>
    );
  }
}