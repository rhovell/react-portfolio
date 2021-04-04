import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homepage from './pages/home.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <main>
          <BrowserRouter>
            <Route to="/" component={Homepage} >
            </Route>
          </BrowserRouter>
        </main>
        <Footer/>
      </div>
    );

  }
}

export default App;
