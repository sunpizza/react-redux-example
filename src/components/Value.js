/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};



class Value extends Component {
//   constructor() {
//     super();
//     this.state = {
//       someKey: 'someValue'
//     };
//   }

    constructor(props) {
        super(props);
    }

  render() {
    return(
        <div>
            <h1>{this.props.number}</h1>
        </div>
    );
  }

//   componentDidMount() {
//     this.setState({
//       someKey: 'otherValue'
//     });
//   }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
