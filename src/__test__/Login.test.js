import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow, configure } from 'enzyme';


import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


import LoginScreen from '../components/LoginScreen'
import { Button, Grid, Paper } from 'material-ui'



var login =  new LoginScreen()


describe('google login button', () => {
  
  it('Should be defined', () => {
    expect(LoginScreen).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Button
        variant='raised'
        onClick={() => this.handleGoogleLogin()}
      >
        <i className='fab fa-google'/>
        Login With Google
        </Button>
    )
    expect(tree).toMatchSnapshot()
    
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Button
        variant='raised'
        onClick={() => this.handleFacebookLogin()}
      >
        <i className='fab fa-google' />
        Login With Facebook
        </Button>
    )
    expect(tree).toMatchSnapshot()
  })

  // simulate click button
  it('should call mock function when button is clicked', () => {
    const tree = shallow(
      <Button
        variant='raised'
        onClick={() => login.handleGoogleLogin()}
      >
        <i className='fab fa-google' />
        Login With Google
        </Button>
    )
    tree.simulate('click')
  })
  
  // it('should call mock function when button is clicked', () => {
  //   const mockFn = login.handleFacebookLogin
  //   const tree = shallow(
  //     <Button
  //       variant='raised'
  //       onClick={mockFn}
  //     >
  //     <i
  //       className='fab fa-facebook-f'
  //     />
  //     Login With Facebook
  //     </Button>
  //   )
  //   tree.simulate('click')

  // })

})

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;