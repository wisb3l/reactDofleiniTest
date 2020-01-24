import React, { PureComponent } from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form'

import Checks from '../Checks/Checks'
//import { Test } from './ProfileCheck.styles';

export default class ProfileCheck extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  lenghtProgresBar=()=>{
    let a=this.props.perfil
    let cont=0;
    for(let i in a){
      if (a[i]) {
        cont++;
      }
    }
    if (a.length===0) {
      return 0;
    }
    return cont*100/a.length;
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
     <div className="completeProfileArea">
        <div className="welcomeTextArea">
          <div>
            <p className="importantParagraph">Completa tu perfil</p>
          </div>
          <div>
            <Form>
              <div key={`custom-checkbox`} className="mb-3">
                <Checks
                  changeState={this.props.changeState}
                  label='Configura tu cuenta' 
                  id="configureProfileCheck" 
                  checked={this.props.perfil} 
                  element={0} 
                />
                <Checks
                  changeState={this.props.changeState}
                  label='Carga tu foto' 
                  id="uploadPhotoCheck" 
                  checked={this.props.perfil} 
                  element={1}
                />
                <Checks 
                  changeState={this.props.changeState}
                  label='Invitar a miembros de tu equipo (1/3)' 
                  id="inviteMembersCheck" 
                  checked={this.props.perfil} 
                  element={2}
                />
                <Checks 
                  changeState={this.props.changeState}
                  label='Habilitar las notificaciones' 
                  id="enableNotificationsCheck" 
                  checked={this.props.perfil} 
                  element={3}
                />
                <Checks 
                  changeState={this.props.changeState}
                  label='Crear tu propio espacio' 
                  id="createSpaceScheck" 
                  checked={this.props.perfil} 
                  element={4}
                />
              </div>
            </Form>
          </div>
          <div>
            <ProgressBar now={this.lenghtProgresBar()} />
          </div>
        </div>
      </div>
    );
  }
}