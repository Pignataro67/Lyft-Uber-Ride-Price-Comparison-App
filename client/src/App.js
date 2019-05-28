<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Card from './components/Card';
// import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConfirmRouteContainer from './containers/ConfirmRouteContainer';
import ResultsContainer from './containers/ResultsContainer';
import SearchContainer from './containers/SearchContainer';
import { getMapboxKey } from './actions/fetchLocations'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getMapboxKey()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>  
          <Route exact path="/" component={SearchContainer}/>
          <Route exact path="/confirm_route" component={ConfirmRouteContainer}/>
          <Route exact path="/results" component={ResultsContainer}/>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {startingLocation: state.startingLocation, destination: state.destination}
}

const mapDispatchToProps = (dipatch) => {
  return {getMapboxKey: () => dispatch(getMapboxKey())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 6e00a5944d0a39da9fd156bdbfe5f7dafef18ac7
