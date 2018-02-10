import React, { Component } from 'react'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card'
import {
  Button,
  Grid,
  Paper,
  ButtonBase,
  Avatar,
  Divider,
  ListItemSecondaryAction,
  IconButton
} from 'material-ui'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import DeleteIcon from 'material-ui-icons/Delete'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import Header from './Header'

class ContentDetail extends Component {
  render () {
    console.log(this.props.location.pathname)
    const image =
      'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
    return (
      <div style={styles.root}>
        <Header location={this.props.location.pathname} />
        <div style={styles.content}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card>
                <CardMedia
                  style={styles.media}
                  image={image}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <List component='nav'>
                  <Link
                    to='/sketch'
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItem button onClick={() => console.log('Lorem ipsum')}>
                      <ListItemIcon>
                        <Avatar alt='Eric Hoffman' src='./assets/logo.png' />
                      </ListItemIcon>
                      <ListItemText
                        inset
                        primary='Article Title'
                        secondary='saya adalah anak gembala, selalu riang serta gembira.. la.. la.. la..'
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label='Delete'
                          onClick={() =>
                            console.log(
                              'aku adalah anak gembala lala lala lala'
                            )}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    </Link>
                    <Divider />
                    <ListItem button onClick={() => console.log('Lorem ipsum')}>
                      <ListItemIcon>
                        <Avatar alt='Eric Hoffman' src='./assets/logo.png' />
                      </ListItemIcon>
                      <ListItemText
                        inset
                        primary='Article Title'
                        secondary='saya adalah anak gembala, selalu riang serta gembira.. la.. la.. la..'
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label='Delete'
                          onClick={() =>
                            console.log(
                              'aku adalah anak gembala lala lala lala'
                            )}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => console.log('Lorem ipsum')}>
                      <ListItemIcon>
                        <Avatar alt='Eric Hoffman' src='./assets/logo.png' />
                      </ListItemIcon>
                      <ListItemText
                        inset
                        primary='Article Title'
                        secondary='saya adalah anak gembala, selalu riang serta gembira.. la.. la.. la..'
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label='Delete'
                          onClick={() =>
                            console.log(
                              'aku adalah anak gembala lala lala lala'
                            )}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => console.log('Lorem ipsum')}>
                      <ListItemIcon>
                        <Avatar alt='Eric Hoffman' src='./assets/logo.png' />
                      </ListItemIcon>
                      <ListItemText
                        inset
                        primary='Article Title'
                        secondary='saya adalah anak gembala, selalu riang serta gembira.. la.. la.. la..'
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label='Delete'
                          onClick={() =>
                            console.log(
                              'aku adalah anak gembala lala lala lala'
                            )}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => console.log('Lorem ipsum')}>
                      <ListItemIcon>
                        <Avatar alt='Eric Hoffman' src='./assets/logo.png' />
                      </ListItemIcon>
                      <ListItemText
                        inset
                        primary='Article Title'
                        secondary='saya adalah anak gembala, selalu riang serta gembira.. la.. la.. la..'
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label='Delete'
                          onClick={() =>
                            console.log(
                              'aku adalah anak gembala lala lala lala'
                            )}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions >
                <div style={styles.button}>
                <Link
                  to='/add-object'
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="raised" color="primary">
                    Add New Marker
                  </Button>
                  </Link>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Navigation style={styles.navigation} />
        </div>
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
  navigation: {
    top: 56
  },
  content: {
    paddingBottom: 120
  },
  media: {
    height: 300
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto'
  }
}

export default ContentDetail
