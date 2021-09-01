import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    // return <p>{this.state.someKey}</p>;
    return (
        <Counter/>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default App;
