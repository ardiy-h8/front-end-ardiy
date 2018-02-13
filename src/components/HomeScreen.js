import React, { Component } from 'react'
import { Typography, Divider } from 'material-ui'
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card'
import { Button, Grid, Paper, ButtonBase } from 'material-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import {
  fetchAllMagazines,
  getUser,
  modifyCover
} from '../redux/actions/detailCoverActions'
import Navigation from './Navigation'
import Header from './Header'

class HomeScreen extends Component {
  componentWillMount() {
    this.props.fetchAllMagazines()
    let objUserData = localStorage.userData
    if (objUserData) {
      objUserData = JSON.parse(objUserData)
      this.props.getUser(objUserData)
    }
  }

  handleDelete(id) {
    this.props
      .mutate({
        variables: { id }
      })
      .then(res => {
        let newCover = this.props.fetchCover.filter(
          newData => newData.id !== id
        )
        this.props.modifyCover(newCover)
      })
      .catch(err => console.error(err))
  }

  render() {
    const fetchCover = this.props.fetchCover

    return (
      <div style={styles.root}>
        <Header location={this.props.location.pathname} />
        <div style={styles.content}>
          <Grid container spacing={24}>
            {fetchCover.map((cover, index) => {
              return (
                <Grid item xs={6} sm={2} key={index}>
                  <div style={styles.card}>
                    <Link
                      to={`/content/${cover.title}`}
                      style={{ textDecoration: 'none' }}>
                      <Card>
                        <Button
                          variant="flat"
                          style={{
                            width: '100%',
                            padding: 0
                          }}>
                          <img src={cover.imagePreviewUrl} width="100%" />
                        </Button>
                        <Divider />
                        <CardContent>
                          <Typography component="p" style={{ fontSize: 15 }}>
                            {cover.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                    <Button onClick={() => this.handleDelete(cover.id)}>
                      Delete
                    </Button>
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

const mapStateToProps = state => ({
  fetchCover: state.detailCoverReducers.cover
})

const mapDispatchToProps = dispatch => ({
  fetchAllMagazines: () => dispatch(fetchAllMagazines()),
  getUser: user => dispatch(getUser(user)),
  modifyCover: cover => dispatch(modifyCover(cover))
})

const query = gql`
  mutation deleteMagazine($id: String!) {
    deleteMagazine(id: $id) {
      id
    }
  }
`

const graphqlQuery = graphql(query)(HomeScreen)

export default connect(mapStateToProps, mapDispatchToProps)(graphqlQuery)
