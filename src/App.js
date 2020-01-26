import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import datos from './data/data.js';

import MenuArea from './components/MenuArea/MenuArea';
import ContentArea from './components/ContentArea/ContentArea';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datos: datos
    };
  }

  changeState=(pos)=>{
    const newDatos=this.state.datos.map(item => {
      item.perfil[pos]=!item[0].perfil[pos];
      return item
    });
    this.setState({datos:newDatos})
  }

  changeFavorite=(p)=>{
    console.log("bbbbbbbbb")
    const newDatos=this.state.datos.map(item => {
      item.proyectos.map(item2 => {
        if (p.key===item2.key) {
          item2.favorito=!item2.favorito
          return item2;
        }else return item2
      });
      return item
    });
    this.setState({datos:newDatos})
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={5} className="workArea">
            <Row>
              <MenuArea datos={this.state.datos} changeFavorite={this.changeFavorite}/>
              <ContentArea datos={this.state.datos} changeState={this.changeState}/>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

