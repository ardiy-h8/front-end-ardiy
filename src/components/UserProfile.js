import React, { Component } from 'react'
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card'
import {
  Button,
  Grid,
  Paper,
  ButtonBase,
  Avatar,
  Typography
} from 'material-ui'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import Header from './Header'

class UserPofile extends Component {
  render () {
    const image =
      'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
    const image2 = ''
    return (
      <div style={styles.root}>
        <Header location={this.props.location.pathname} />
        <div style={styles.profile}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card>
                <CardContent style={styles.row}>
                  <Avatar
                    alt='Remy Sharp'
                    src='../assets/avatar.jpg'
                    style={styles.avatar}
                  />

                  <p style={{ fontSize: 20 }}>Joko Sampurno Widodo</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        <div style={styles.content}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={4}>
              <div style={styles.card}>
                <Link
                  to='/content/lorem ipsum'
                  style={{ textDecoration: 'none' }}
                >
                  <Card>
                    <Button
                      variant='flat'
                      style={{
                        width: '100%',
                        padding: 0
                      }}
                    >
                      <img src={image} width='100%' />
                    </Button>
                    <CardContent>
                      <Typography component='p' style={{ fontSize: 20 }}>
                        Lorem impsum dolor sit ammet
                      </Typography>

                    </CardContent>
                  </Card>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div style={styles.card}>
                <Link
                  to='/content/lorem ipsum'
                  style={{ textDecoration: 'none' }}
                >
                  <Card>
                    <Button
                      variant='flat'
                      style={{
                        width: '100%',
                        padding: 0
                      }}
                    >
                      <img src={image} width='100%' />
                    </Button>
                    <CardContent>
                      <Typography component='p' style={{ fontSize: 20 }}>
                        Lorem impsum dolor sit ammet
                      </Typography>

                    </CardContent>
                  </Card>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div style={styles.card}>
                <Link
                  to='/content/lorem ipsum'
                  style={{ textDecoration: 'none' }}
                >
                  <Card>
                    <Button
                      variant='flat'
                      style={{
                        width: '100%',
                        padding: 0
                      }}
                    >
                      <img src={image} width='100%' />
                    </Button>
                    <CardContent>
                      <Typography component='p' style={{ fontSize: 20 }}>
                        Lorem impsum dolor sit ammet
                      </Typography>

                    </CardContent>
                  </Card>
                </Link>
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div style={styles.card}>
                <Link
                  to='/content/lorem ipsum'
                  style={{ textDecoration: 'none' }}
                >
                  <Card>
                    <Button
                      variant='flat'
                      style={{
                        width: '100%',
                        padding: 0
                      }}
                    >
                      <img src={image} width='100%' />
                    </Button>
                    <CardContent>
                      <Typography component='p' style={{ fontSize: 20 }}>
                        Lorem impsum dolor sit ammet
                      </Typography>

                    </CardContent>
                  </Card>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
        <Navigation style={styles.navigation} />
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
  profile: {},
  content: {
    paddingBottom: 120,
    paddingLeft: '0.42em',
    paddingRight: '0.42em'
  },
  navigation: {
    top: 56
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150
  }
}

export default UserPofile
