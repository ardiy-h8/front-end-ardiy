import React, { Component } from 'react'
import { Typography, Divider } from 'material-ui'
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card'
import { Button, Grid, Paper, ButtonBase } from 'material-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SetTime from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import TimeAgo from 'react-time-ago'

import Navigation from './Navigation'
import Header from './Header'

SetTime.locale(en)

class HomeScreen extends Component {
  render () {
    console.log('home', this.props.fetchCover)

    const fetchCover = this.props.fetchCover

    return (
      <div style={styles.root}>
        <Header location={this.props.location.pathname} />
        <div style={styles.content}>
          <Grid container spacing={24}>
            {fetchCover.map((cover, index) => {
              return (
                <Grid item xs={6} sm={2}>
                  <div style={styles.card}>
                    <Link
                      to={`/content/${cover.title}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Card key={index}>
                        <Button
                          variant='flat'
                          style={{
                            width: '100%',
                            padding: 0
                          }}
                        >
                          <img src={cover.image} width='100%' />
                        </Button>
                        <TimeAgo
                          style={{
                            color: 'gray',
                            fontSize: '5',
                            paddingLeft: '1em',
                            paddingTop: '0.5em',
                            paddingBottom: '0.5em'
                          }}
                        >
                          {cover.createdAt}
                        </TimeAgo>
                        <Divider />
                        <CardContent>
                          <Typography component='p' style={{ fontSize: 15 }}>
                            {cover.title}
                          </Typography>
                        </CardContent>

                      </Card>
                    </Link>
                  </div>
                </Grid>
              )
            })}
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

const mapStateToProps = state => {
  return {
    fetchCover: state.detailCoverReducers.cover
  }
}

export default connect(mapStateToProps)(HomeScreen)
