import React, { Component } from 'react'
import { Typography, Divider, IconButton } from 'material-ui'
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card'
import { Button, Grid, Paper, ButtonBase } from 'material-ui'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import InfoIcon from 'material-ui-icons/Info'

import Navigation from './Navigation'
import Header from './Header'

class HomeScreen extends Component {
  render () {
    console.log('home', this.props.fetchCover)

    const fetchCover = this.props.fetchCover

    return (
      <div style={styles.root}>
        <Header location={this.props.location.pathname} />
        <div style={styles.content}>
          <GridList cellHeight={260} style={styles.gridList}>
            {fetchCover.map((cover, index) => {
              return (
                <GridListTile key={index}>
                  <Link
                    to={`/content/${cover.title}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <img
                      src={cover.imagePreviewUrl}
                      width={'100%'}
                      height={'100%'}
                      alt={cover.title}
                    />
                    <GridListTileBar
                      style={{ paddingLeft: 10 }}
                      title={cover.title}
                    />
                  </Link>
                </GridListTile>
              )
            })}
          </GridList>
        </div>
        <Navigation style={styles.navigation} />
      </div>
    )
  }
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#eee'
  },
  gridList: {
    padding: '0 2em',
    width: 400,
    height: 510
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  content: {
    magin: '0 auto',
    top: 56,
    paddingBottom: 120,
    paddingTop: 63,
    marginLeft: '2em',
    marginRight: '2em',
    width: 960
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
