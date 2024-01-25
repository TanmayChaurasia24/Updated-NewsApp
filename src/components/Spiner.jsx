// Spinner.jsx
import React, { Component } from 'react';
import SpinnerImage from './Maelstorm.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-item-center my-5'>
        <img src={SpinnerImage} alt='spinnerimage' style={{
            height: 50,
        }}/>
      </div>
    );
  }
}

export default Spinner;
