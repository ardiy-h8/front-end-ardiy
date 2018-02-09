import React, { Component } from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { Paper, Grid, TextField, IconButton, Button } from 'material-ui'

import Navigation from './Navigation'
import Header from './Header'

class UserScreen extends Component {
  render () {
    return (
      <div id='coba' style={styles.root}>
        <Header />
        <div style={styles.container}>
          <TextField
            id='title'
            label='Title*'
            helperText='ex: Your Title'
            fullWidth
            margin='normal'
          />
          <TextField
            id='detail'
            label='Detail*'
            helperText='ex: Description Detail'
            fullWidth
            margin='normal'
          />
          <input
            accept='image/*'
            type='file'
            id='marker'
            name='marker'
            style={{ display: 'none' }}
          />
          <label htmlFor='marker'>
            <Button variant='raised' component='span' syle={styles.button}>
              Marker Upload
            </Button>
          </label>
          <input
            type='file'
            id='object'
            placeholder='object'
            style={{ display: 'none' }}
          />
          <label htmlFor='object'>
            <br />
            <Button variant='raised' component='span' syle={styles.button}>
              Object Upload
            </Button>
          </label>
          <div>
            <br />
            <Button
              variant='raised'
              component='span'
              color='primary'
              syle={styles.button}
            >
              Save
            </Button>
          </div>
        </div>
        <Navigation />
      </div>
    )
  }
}

const styles = {
  root: {
    top: 56,
    position: 'absolute'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    top: 56,
    padding: '2em'
  },
  button: {
    padding: '0.75em'
  }
}

export default UserScreen
