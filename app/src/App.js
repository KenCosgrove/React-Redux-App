import React, { useEffect } from 'react';
import './App.css';
import Golfers from './components/Golfers'
import { connect } from 'react-redux'
import { fetchGolfer } from "./store/actions";


function App({ fetchGolfer, loadingGolfer, errorMessage }) {

  useEffect(() => {
    fetchGolfer();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>FedEx Championship</h1>
        {!loadingGolfer? <Golfers /> : <div>Fetching golfers..</div>}
        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingGolfer: state.loadingGolfer,
    errorMessage: state.errorMessage
  };
}

export default connect(mapStateToProps, { fetchGolfer })(App);