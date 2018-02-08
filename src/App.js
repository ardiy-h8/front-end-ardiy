import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import LoginScreen from './components/LoginScreen'
import Sketch from './components/Sketch'

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
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/sketch' component={Sketch} />
          <Redirect from='/' to='/login' />
        </div>
      </Router>
    )
  }
}

export default App
