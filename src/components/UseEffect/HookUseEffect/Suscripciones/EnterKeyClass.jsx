import React from 'react';

export class EnterKeyClass extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({keyCode}) => {
    const enterKeyCode =  13;
    if (keyCode === enterKeyCode) {
      alert('Bien presionado');
    }
  };

  render() {
    return 'Presionaaa Enter xD';
  }

}