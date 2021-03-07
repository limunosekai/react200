import React, { Component } from 'react';

class R003 extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('props 전달됨' + props.name);
    return { name: props.name };
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('생성자 호출');
  }

  shouldComponentUpdate(props, state) {
    console.log('age: ' + state.age);
    return state.age;
  }

  componentDidMount() {
    console.log('마운트');
    console.log('name: ' + this.state.name);
    this.setState({
      age: 30,
    });
  }

  render() {
    console.log('render call');
    return <h2>[THIS IS IMPORTED COMPONENT]</h2>;
  }
}

export default R003;
