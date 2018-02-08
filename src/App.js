import React, { Component } from 'react'
import Sketch from './components/Sketch'
import MarkerGenerator from './components/MarkerGenerator'

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

class App extends Component {
  render () {
    return (
      <div style={styles.container}>
        {/* <Sketch /> */}
        
        <MarkerGenerator />
        
      </div>
    )
  }
}

export default App
