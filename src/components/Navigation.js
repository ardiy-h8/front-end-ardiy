import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import BottomNavigation, {
  BottomNavigationAction
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import AssignmentIcon from 'material-ui-icons/Assignment'
import CameraIcon from 'material-ui-icons/CameraAlt'

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
          <BottomNavigationAction label='Home' icon={<HomeIcon />} />
          <BottomNavigationAction label='Input' icon={<AssignmentIcon />} />
          <BottomNavigationAction label='Camera' icon={<CameraIcon />} />
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
