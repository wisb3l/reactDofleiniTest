import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Project from '../Project/Project';
//import { Test } from './ListFavoriteProjects.styles';

export default class ListFavoriteProjects extends PureComponent { 
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
      item.favorito && <Project proyecto={item} changeFavorite={this.props.changeFavorite}/> 
    )
  }
}
