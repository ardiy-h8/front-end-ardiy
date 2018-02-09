import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import LoginScreen from './components/LoginScreen'
import Sketch from './components/Sketch'
import HomeScreen from './components/HomeScreen'

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily: "'Roboto', sans-serif"
  }
}
const customHistory = createBrowserHistory()
class App extends Component {
  render () {
    return (
      <Router>
        <div style={styles.container}>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/sketch' component={Sketch} />
          <Route exact path='/home' component={HomeScreen} />
        </div>
      </Router>
    )
  }
}

export default App
