import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import LoginScreen from '../components/LoginScreen'
import { Button, Grid, Paper } from 'material-ui'

describe('google login button', () => {
  const mockFn = jest.fn()
  it('Should be defined', () => {
    expect(LoginScreen).toBeDefined()
  })

  it('should render correctly', () => {
    const tree = shallow(
      <Button
        variant='raised'
        onClick={() => this.handleGooleLogin()}
      >
        <i className='fab fa-google'/>
        Login With Google
        </Button>
    )
    expect(tree).toMatchSnapshot()
  })
})