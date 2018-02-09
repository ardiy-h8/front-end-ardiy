import React, { Component } from 'react'
import {
  Button,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Typography
} from 'material-ui'
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import FavoriteIcon from 'material-ui-icons/Favorite'
import ShareIcon from 'material-ui-icons/Share'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import MoreVertIcon from 'material-ui-icons/MoreVert'

import Navigation from './Navigation'
import Header from './Header'

class HomeScreen extends Component {
  render () {
    return (
      <div style={styles.root}>
        <div style={styles.content}>
          <Header />
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image='https://drscdn.500px.org/photo/231851609/m%3D900_s%3D1_k%3D1_a%3D1/v2?webp=true&v=0&sig=5089ce70bfbb0b4221557ee38b29ba337c417a172e3f73701182cc8046f24d00'
              title='Contemplative Reptile'
            />
            <CardHeader
              avatar={
                <Avatar aria-label='Recipe' style={styles.avatar}>
                  R
                </Avatar>
              }
              title='Shrimp and Chorizo Paella'
              subheader='September 14, 2016'
            />
            <CardContent>
              <Typography component='p'>
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions style={styles.actions} disableActionSpacing>
              <IconButton aria-label='Add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='Share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
          <Card style={styles.card}>
            <CardMedia
              style={styles.media}
              image='https://drscdn.500px.org/photo/231851609/m%3D900_s%3D1_k%3D1_a%3D1/v2?webp=true&v=0&sig=5089ce70bfbb0b4221557ee38b29ba337c417a172e3f73701182cc8046f24d00'
              title='Contemplative Reptile'
            />
            <CardHeader
              avatar={
                <Avatar aria-label='Recipe' style={styles.avatar}>
                  R
                </Avatar>
              }
              title='Shrimp and Chorizo Paella'
              subheader='September 14, 2016'
            />
            <CardContent>
              <Typography component='p'>
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions style={styles.actions} disableActionSpacing>
              <IconButton aria-label='Add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='Share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <Navigation style={styles.navigation} />
      </div>
    )
  }
}

const styles = {
  root: {
    position: 'relative',
    overflowY: 'auto',
    maxHeight: '100vh',
    top: 56,
    backgroundColor: '#eee'
  },
  content: {
    paddingBottom: 120
  },
  card: {
    maxWidth: '100%',
    marginBottom: '2em'
  },
  media: {
    height: 300
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: 'red[500]'
  },
  navigation: {
    top: 56
  }
}

export default HomeScreen
