import React, { Component } from 'react'
import { Typography } from 'material-ui'
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card'
import { Button, Grid, Paper, ButtonBase } from 'material-ui'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import Header from './Header'

class HomeScreen extends Component {
  render () {
    const image =
      'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
    return (
      <div style={styles.root}>

        <Header location={this.props.location.pathname} />
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
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div style={styles.card}>
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
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div style={styles.card}>
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
              </div>
            </Grid>
            <Grid item xs={6} sm={4}>
              <div style={styles.card}>
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
  content: {
    paddingBottom: 120,
    paddingTop: '1em',
    paddingLeft: '0.42em',
    paddingRight: '0.42em'
  },
  media: {
    height: 300
  },
  navigation: {
    top: 56
  }
}

export default HomeScreen
