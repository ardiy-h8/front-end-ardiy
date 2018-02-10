import React, { Component } from 'react'
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card'
import { Button, Grid, Paper, ButtonBase, TextField } from 'material-ui'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import Header from './Header'
class AddDetailScreen extends Component {
  constructor(){
    super()
    this.state = {
      file: '',
      imagePreviewUrl : './assets/uploaddefault-bg.jpg'
    }
    this.handleImageChange = this.handleImageChange.bind(this)
  }
  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  render () {
    return (
      <div style={styles.root}>

        <Header location={this.props.location.pathname} />
        <div style={styles.content}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card>
              <CardContent>
              <img src={this.state.imagePreviewUrl} alt="uploaded" width="100%"/>
              <TextField
                id='title'
                label='Title'
                helperText='Magazine, brochure title'
                fullWidth
                margin='normal'
              />
              <input
                accept='image/*'
                type='file'
                id='marker'
                name='marker'
                style={{ display: 'none' }}
                onChange={this.handleImageChange}
              />
              <label htmlFor='marker'>
                <Button variant='raised' component='span' syle={styles.button}>
                  Marker Upload
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
              </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <Navigation />
      </div>
    )
  }
}

const styles = {
  root: {
    position: 'fixed',
    overflowY: 'Auto',
    overflowX: 'hidden',
    height: '100vh',
    top: 56,
    width: '100%',
    backgroundColor: '#eee'
  },
  navigation: {
    top: 56
  }
}

export default AddDetailScreen
