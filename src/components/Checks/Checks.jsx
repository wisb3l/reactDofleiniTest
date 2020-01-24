import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'

//import { Test } from './Checks.styles';

class Checks extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  changeStateElement = () => {
    this.props.changeState.bind(this, this.props.element)
  }

  styleChechedLabel=()=>{
    if (this.props.checked[this.props.element]) {
      return 'checkedCheckbox';
    }
    return '';
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Form.Check className={this.styleChechedLabel()}
        custom
        type={'checkbox'}
        label={this.props.label}
        id={this.props.id}
        checked={this.props.checked[this.props.element]}
        onChange={this, ()=> this.changeStateElement(this)}
      />
      
    );
  }
}

Checks.propTypes = {
  // bla: PropTypes.string,
};

Checks.defaultProps = {
  // bla: 'test',
};

export default Checks;
