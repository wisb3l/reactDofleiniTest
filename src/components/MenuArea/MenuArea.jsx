import React, { PureComponent } from 'react';

import { faSearch, faOutdent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ListFavoriteProjects from  '../ListFavoriteProjects/ListFavoriteProjects';
import ListProjects from './ListProjects/ListProjects';
//import { Test } from './MenuArea.styles';

export default class MenuArea extends PureComponent { 
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
          <ListFavoriteProjects proyectos={this.props.datos[0].proyectos} changeFavorite={this.props.changeFavorite}/>
          <p className="importantParagraph menuElements">Recientes</p>
          <ListProjects proyectos={this.props.datos[0].proyectos} changeFavorite={this.props.changeFavorite}/>
        </div>
      </Col>
    );
  }
}