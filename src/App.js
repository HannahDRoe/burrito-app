import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
// import IngredientNav from './components/IngredientSelection';
import SelectMealBtns from './components/SelectMealBtns'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Dream Burrito</h1>
        </header>
        {/* <IngredientNav /> */}
        <SelectMealBtns />
      </div>
    );
  }
}

export default App;
