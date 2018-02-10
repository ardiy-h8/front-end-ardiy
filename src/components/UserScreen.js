import React, { Component } from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { Paper, Grid, TextField, IconButton, Button, Card } from 'material-ui'
import Upload from 'material-ui-upload/Upload'

import Navigation from './Navigation'
import Header from './Header'

class UserScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      detail: '',
      cover: '',
      marker: '',
      object: ''
    }
  }

  render () {
    return (
      <div id='coba' style={styles.root}>
        <Header />
        <div style={styles.card}>
          <Card>
            <div style={styles.container}>
              <TextField
                id='title'
                label='Title*'
                helperText='ex: Your Title'
                fullWidth
                margin='normal'
                value={this.state.title}
                onChange={e => this.setState({ title: e.target.value })}
              />
              <TextField
                id='detail'
                label='Detail*'
                helperText='ex: Description Detail'
                fullWidth
                margin='normal'
                value={this.state.detail}
                onChange={e => this.setState({ detail: e.target.value })}
              />
              <div style={styles.bottom}>
                <input
                  accept='image/*'
                  type='file'
                  id='cover'
                  name='cover'
                  style={{ display: 'none' }}
                  value={this.state.cover}
                  onChange={e => this.setState({ cover: e.target.value })}
                />
                <label htmlFor='cover'>
                  <Button
                    variant='raised'
                    component='span'
                    syle={styles.button}
                  >
                    Cover Image
                  </Button>
                </label>
              </div>
              <div style={styles.bottom}>
                <input
                  accept='image/*'
                  type='file'
                  id='marker'
                  name='marker'
                  style={{ display: 'none' }}
                  value={this.state.marker}
                  onChange={e => this.setState({ marker: e.target.value })}
                />
                <label htmlFor='marker'>
                  <Button
                    variant='raised'
                    component='span'
                    syle={styles.button}
                  >
                    Marker Upload
                  </Button>
                </label>
              </div>
              <div style={styles.bottom}>
                <input
                  type='file'
                  id='object'
                  placeholder='object'
                  style={{ display: 'none' }}
                  value={this.state.object}
                  onChange={e => this.setState({ object: e.target.value })}
                />
                <label htmlFor='object'>
                  <Button
                    variant='raised'
                    component='span'
                    syle={styles.button}
                  >
                    Object Upload
                  </Button>
                </label>
              </div>
              <div>
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
          </Card>
        </div>

        <Navigation />
      </div>
    )
  }
}

const styles = {
  root: {
    top: 56,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee'
  },
  card: {
    maxWidth: '100%',
    padding: '2em',
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    top: 56,
    padding: '2em',
    height: '100%'
  },
  button: {
    padding: '0.75em'
  },
  bottom: {
    marginBottom: '1em'
  }
}

export default UserScreen
