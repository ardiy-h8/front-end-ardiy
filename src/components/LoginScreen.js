import React, { Component } from 'react'
import { loginWithGoole, loginWithFacebook } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'
import { Button, Grid, Paper } from 'material-ui'

const firebaseAuthKey = 'firebaseAuthInProgress'
const appTokenKey = 'appToken'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      splashScreen: false
    }
    // this.handleGooleLogin = this.handleGooleLogin.bind(this)
  }
  handleGooleLogin () {
    loginWithGoole().catch(err => {
      alert(err)
      localStorage.removeItem(firebaseAuth)
    })
    localStorage.setItem(firebaseAuthKey, '1')
  }
  handleFacebookLogin () {
    loginWithFacebook().catch(err => {
      alert(err)
      localStorage.removeItem(firebaseAuth)
      localStorage.setItem(firebaseAuthKey, '1')
    })
  }
  componentWillMount () {
    if (localStorage.getItem(appTokenKey)) {
      this.props.history.push('/headline')
      return
    }
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log('User signed in: ', JSON.stringify(user))
        localStorage.removeItem(firebaseAuthKey)
        localStorage.setItem(appTokenKey, user.uid)
        this.props.history.push('/headline')
      }
    })
  }
  render () {
    return (
      <div style={styles.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper style={styles.paper}>
              <div>
                <Button
                  style={styles.btnGoogle}
                  variant='raised'
                  onClick={() => this.handleGooleLogin()}
                >
                  <i className='fab fa-google' style={{ marginRight: 30 }} />
                  Login With Google
                </Button>
              </div>
              <div>
                <Button
                  style={styles.btnFacebook}
                  variant='raised'
                  onClick={() => this.handleFacebookLogin()}
                >
                  <i
                    className='fab fa-facebook-f'
                    style={{ marginRight: 30 }}
                  />
                  Login With Facebook
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = {
  root: {
    display: 'flex'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  btnGoogle: {
    marginTop: 20,
    width: 300,
    backgroundColor: 'red',
    textAlign: 'left',
    color: 'white'
  },
  btnFacebook: {
    marginTop: 20,
    width: 300,
    backgroundColor: 'blue',
    color: 'white'
  }
}

export default LoginScreen
