import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { faSearch, faOutdent, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Test } from './Project.styles';

export default class Project extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  classNameChenger=()=>{
    if (this.props.proyecto.favorito) {
      return "colorColumn favoriteProject"
    }
    return "colorColumn noFavoriteProject"
  }

  changeFavoriteProject=()=>{
    this.props.changeFavorite.bind(this, this.props.proyecto)
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="projectRow">
        <Row>
          <Col sm={1}>
            <div className={this.classNameChenger()}></div>
          </Col>
          <Col className="textProjectrow">
            <Row>
              <Col sm={11} className="noPadding">
                <p className="importantParagraph">{this.props.proyecto.nombre}</p>
              </Col>
              <Col className="noPadding" sm={1}>
                <FontAwesomeIcon className="icon"
                  icon={faStar}
                  color={this.props.proyecto.favorito ? 'rgb(255, 198, 10)' : 'rgb(245, 246, 248)'}
                  onClick={this.changeFavoriteProject()} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}