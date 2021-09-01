import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};


class Control extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         someKey: 'someValue'
    //     };
    // }

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

  render() {
    // return <p>{this.state.someKey}</p>;
    return(
        <div>
            <button onClick={this.props.onPlus}>+</button>
            <button onClick={this.props.onSubtract}>-</button>
            <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
        </div>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

Control.proTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
