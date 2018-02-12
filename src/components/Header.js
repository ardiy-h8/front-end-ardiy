import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui/'
import { Link } from 'react-router-dom'
class Header extends Component {
  render () {
    let location = this.props.location.split('/')
    console.log('aku adalah anak gembala', location)
    return (
      <div style={styles.root}>
        <AppBar position='static' style={styles.background}>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              <Link to='/home'>
                <img
                  src='../header-logo.png'
                  alt='logo'
                  height='40px'
                  width='40px'
                />
              </Link>
            </Typography>
            <Typography
              component='h2'
              style={{
                fontfamily: "'Poppins', sans-serif",
                color: '#fff',
                fontSize: 20,
                marginLeft: 20,
                fontWeight: 700
              }}
            >
              {location[2] ? location[2].toUpperCase() : 'ARDY'}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styles = {
  root: {
    width: '100%',
    top: 0,
    zIndex: 100,
    position: 'fixed'
  },
  background: {
    background: '#1488CC' /* fallback for old browsers */,
    background: '-webkit-linear-gradient(to right, #2B32B2, #1488CC)' /* Chrome 10-25, Safari 5.1-6 */,
    background: 'linear-gradient(to right, #2B32B2, #1488CC)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}

export default Header
