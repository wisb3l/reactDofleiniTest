import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { faSearch, faOutdent, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import datos from './data/data.js';
import ProfileCheck from './components/ProfileCheck/ProfileCheck';
import Project from './components/Project/Project';
import WelcomeArea from './components/WelcomeArea/WelcomeArea';
import ListFavoriteProjects from './components/ListFavoriteProjects/ListFavoriteProjects';
import ListProjects from './components/ListProjects/ListProjects';

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
        }
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
              <Col sm={5} className="menuArea">
                <div className="startArea menuElement">
                  <Row>
                    <Col>
                      <a href="" className="btn menuElements">Inicio</a>
                    </Col>
                    <Col sm={2}>
                      <FontAwesomeIcon className="icon"
                        icon={faOutdent}
                        color="rgb(108,108,108)"
                        size="lg" />
                    </Col>
                  </Row>
                </div>
                <div className="myWeek menuElement">
                  <a href="" className="btn menuElements">Mi Semana</a>
                </div>
                <div className="projects menuElement">
                  <a href="" className="btn menuElements">Proyectos</a>
                </div>
                <div className="search-container menuElement">
                  <form>
                    <Row>
                      <Col sm={1}>
                        <FontAwesomeIcon className="icon"
                        icon={faSearch}
                        color="rgb(108,108,108)" />
                      </Col>
                      <Col sm ={10}>
                        <input type="text" placeholder="Buscar proyectos..." name="search"/>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="favoriteArea menuElement">
                  <p className="importantParagraph menuElements">Favoritos</p>
                  <p className="menuElements">(Marca tus proyectos favoritos haciendo clic en la estrella)</p>
                </div>
                <div className="listProjects">
                  <ListFavoriteProjects proyectos={this.state.datos[0].proyectos} changeFavorite={this.changeFavorite}/>
                  <p className="importantParagraph menuElements">Recientes</p>
                  <ListProjects proyectos={this.state.datos[0].proyectos} changeFavorite={this.changeFavorite}/>
                </div>
              </Col>
              <Col sm={7} className="contentArea">
                <WelcomeArea
                  nombreUsuario={this.state.datos[0].nombreUsuario}
                />
                <ProfileCheck 
                  perfil={this.state.datos[0].perfil} 
                  changeState={this.changeState}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

