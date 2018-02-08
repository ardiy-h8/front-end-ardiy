import React, { Component } from 'react'
import { loginWithGoole, loginWithFacebook } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

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
      this.props.history.push('/sketch')
      return
    }
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        console.log('User signed in: ', JSON.stringify(user))
        localStorage.removeItem(firebaseAuthKey)
        localStorage.setItem(appTokenKey, user.uid)
        this.props.history.push('/sketch')
      }
    })
  }
  render () {
    return (
      <div>
        <button onClick={() => this.handleGooleLogin()}>Google</button>
        <button onClick={() => this.handleFacebookLogin()}>Facebook</button>
        <button>Github</button>
      </div>
    )
  }
}

export default LoginScreen
