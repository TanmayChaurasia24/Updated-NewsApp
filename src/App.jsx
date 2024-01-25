import React, { Component } from 'react';
import Navbar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light'
    }
  }
  pagesize = 12;
  Togglemode = ()=> {
    this.setState((prevstate)=>({
      mode : prevstate.mode === 'dark' ? 'light':'dark'
    }), () => {
      // Check the updated mode and set the background color
      if (this.state.mode === 'dark') {
        document.body.style.backgroundColor = '#041a3a';
      } else {
        document.body.style.backgroundColor = ''; // Reset to default
      }
    });
  }
  render() {
    return (
      <Router>
          <Navbar mode={this.state.mode} Togglemode={this.Togglemode}/>
        <div className='container '>
          <Routes>
            <Route exact path="/" element={<News key="general" pagesize={this.pagesize} country="in" category="general" mode={this.state.mode}/>} />
            <Route exact path="/business" element={<News key="business" pagesize={this.pagesize} country="in" category="business" mode={this.state.mode}/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" mode={this.state.mode}/>} />
            <Route exact path="/general" element={<News key="general" pagesize={this.pagesize} country="in" category="general" mode={this.state.mode}/>} />
            <Route exact path="/health" element={<News key="health" pagesize={this.pagesize} country="in" category="health" mode={this.state.mode}/>} />
            <Route exact path="/science" element={<News key="science" pagesize={this.pagesize} country="in" category="science" mode={this.state.mode}/>} />
            <Route exact path="/sports" element={<News key="sports" pagesize={this.pagesize} country="in" category="sports" mode={this.state.mode} />} />
            <Route exact path="/technology" element={<News key="technology" pagesize={this.pagesize} country="in" category="technology" mode={this.state.mode}/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
