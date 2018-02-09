import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import BottomNavigation, {
  BottomNavigationAction
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import AssignmentIcon from 'material-ui-icons/Assignment'
import CameraIcon from 'material-ui-icons/CameraAlt'
import { Link } from 'react-router-dom'

class Navigation extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    const { value } = this.state
    return (
      <div style={styles.root}>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction
            label='Home'
            icon={<Link to='/home'><HomeIcon /></Link>}
          />
          <BottomNavigationAction
            label='Input'
            icon={<Link to='/content-input'><AssignmentIcon /></Link>}
          />
          <BottomNavigationAction
            label='Camera'
            icon={<Link to='/sketch'><CameraIcon /></Link>}
          />
        </BottomNavigation>
      </div>
    )
  }
}

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0
  },
  icon: {
    color: '#010080'
  }
}

export default Navigation
