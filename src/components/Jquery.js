import React, { Component } from 'react';
import $ from 'jquery';

class Jquery extends Component {
  input_alert = (e) => {
    let input_val = $('#inputID').val();
    alert(input_val);
  };

  render() {
    return (
      <div>
        <h2>[THIS IS JQUERY]</h2>
        <input id='inputID' name='inputName' />
        <button id='buttonID' onClick={(e) => this.input_alert(e)}>
          JQuery Btn
        </button>
      </div>
    );
  }
}

export default Jquery;
