import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form'

import { faSearch, faOutdent, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import welcomeImagen from './resources/imagen.svg';
import { Alert } from 'react-bootstrap';

/* library.add(fab, faCheckSquare) */

function App() {
  return (
    <Container>
      <Row>
        <Col sm={5} className="workArea">
          <Row>
            <Col sm={5} className="menuArea">
              <div className="startArea menuElement">
                <Row>
                  <Col>
                    <a href="" className="btn">Inicio</a>
                  </Col>
                  <Col sm={2}>
                    <FontAwesomeIcon
                      icon={faOutdent}
                      color="rgb(108,108,108)"
                      size="lg" />
                  </Col>
                </Row>
              </div>
              <div className="myWeek menuElement">
                <a href="" className="btn">Mi Semana</a>
              </div>
              <div className="projects menuElement">
                <a href="" className="btn">Proyectos</a>
              </div>

              <div class="search-container menuElement">
                <form>
                  <Row>
                    <Col sm={1}>
                      <FontAwesomeIcon
                      icon={faSearch}
                      color="rgb(108,108,108)" />
                    </Col>
                    <Col sm ={10}>
                      <input type="text" placeholder="Buscar proyectos..." name="search"/>
                    </Col>
                  </Row>
                </form>
              </div>
              <div class="favoriteArea menuElement">
                <p className="importantParagraph">Favoritos</p>
                <p>(Marca tus proyectos favoritos haciendo clic en la estrella)</p>
              </div>
              <div className="listProjects">
                <div className="projectRow">
                  <Row>
                    <Col sm={1}>
                      <div className="colorColumn favoriteProject"></div>
                    </Col>
                    <Col className="textProjectrow">
                      <Row>
                        <Col className="noPadding">
                          <p className="importantParagraph">Bienvenido!</p>
                        </Col>
                        <Col className="noPadding" sm={2}>
                          <FontAwesomeIcon
                            icon={faStar}
                            color="rgb(255, 198, 10)" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <p className="importantParagraph">Recientes</p>
                <div className="projectRow">
                  <Row>
                    <Col sm={1}>
                      <div className="colorColumn favoriteProject"></div>
                    </Col>
                    <Col className="textProjectrow">
                      <Row>
                        <Col className="noPadding">
                          <p className="importantParagraph">Bienvenido!</p>
                        </Col>
                        <Col className="noPadding" sm={2}>
                          <FontAwesomeIcon
                            icon={faStar}
                            color="rgb(255, 198, 10)" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <div className="projectRow">
                  <Row>
                    <Col sm={1}>
                      <div className="colorColumn noFavoriteProject"></div>
                    </Col>
                    <Col className="textProjectrow">
                      <Row>
                        <Col sm={10} className="noPadding">
                          <p className="importantParagraph">Capacitación sobre los aspectos</p>
                        </Col>
                        <Col className="noPadding" sm={2}>
                          <FontAwesomeIcon
                            icon={faStar}
                            color="rgb(245, 246, 248)" />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col sm={7} className="contentArea">
              <div className="welcomeArea">
                <div className="welcomeImageArea">
                  <img src={welcomeImagen} alt="" className="welcomeImage"/>
                </div>
                <div className="welcomeTextArea">
                  <h5>Hola, Jorge:</h5>
                  <p className="importantParagraph">¡Bienvenido a Plankton!</p>
                  <p>Esta es tu página de inicio donde podrás ver rápidamente tus próximas tareas y acceder a tus proyectos más importantes.</p>
                  <p>Hemos creado unas cuantas tareas para ayudarte a comenzar.</p>
                </div>
                <div className="doneBtn">
                  <a className="btn" href="#">Entendido</a>
                </div>
              </div>
              <div className="completeProfileArea">
                <div className="welcomeTextArea">
                  <div>
                    <h7>Completa tu perfil</h7>
                  </div>
                  <div>
                    <Form>
                      <div key={`custom-checkbox`} className="mb-3">
                        <Form.Check 
                          custom
                          type={'checkbox'}
                          label={`Configura tu cuenta`}
                          id={`configureProfileCheck`}
                          onChange={() => alert('Notifications')}
                        />
                        <Form.Check
                          custom
                          type={'checkbox'}
                          label={`Carga tu foto`}
                          id={`uploadPhotoCheck`}
                        />
                        <Form.Check
                          custom
                          type={'checkbox'}
                          label={`Invitar a miembros de tu equipo (1/3)`}
                          id={`inviteMembersCheck`}
                        />
                        <Form.Check
                          custom
                          type={'checkbox'}
                          label={`Habilitar las notificaciones`}
                          id={`enableNotificationsCheck`}
                        />
                        <Form.Check
                          custom
                          type={'checkbox'}
                          label={`Crear tu propio espacio`}
                          id={`createSpaceScheck`}
                        />
                      </div>
                    </Form>
                  </div>
                  <div>
                    <ProgressBar now={70} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
