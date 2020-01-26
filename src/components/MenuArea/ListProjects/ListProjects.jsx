import React, { PureComponent } from 'react';
import Project from '../Project/Project';
//import { Test } from './ListProjects.styles';

export default class ListProjects extends PureComponent { 
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
    return this.props.proyectos.map(item => 
      <Project proyecto={item} changeFavorite={this.props.changeFavorite}/> 
    )
  }
}