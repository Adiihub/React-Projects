import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar
            color='#f11946'
            progress={10}
          /> */}
          <Switch>
            <Route exact path="/"><News key="general"  apikey = {this.apikey} country="us" category="general" /></Route>
            <Route exact path="/home"><News key="general"  apikey = {this.apikey} country="us" category="general" /></Route>
            <Route exact path="/business"><News key="business" apikey = {this.apikey} country="us" category="business" /></Route>
            <Route exact path="/sports"><News key="sports" apikey = {this.apikey} country="us" category="sports" /></Route>
            <Route exact path="/science"><News key="science" apikey = {this.apikey} country="us" category="science" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" apikey = {this.apikey} country="us" category="entertainment" /></Route>
            <Route exact path="/health"><News key="health" apikey = {this.apikey} country="us" category="health" /></Route>
            <Route exact path="/technology"><News key="technology" apikey = {this.apikey} country="us" category="technology" /></Route>
            <Route exact path="/general"><News key="general"  apikey = {this.apikey} country="us" category="general" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
