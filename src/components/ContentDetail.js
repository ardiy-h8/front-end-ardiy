import React, { Component } from 'react'
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card'
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
import { connect } from 'react-redux'

import Navigation from './Navigation'
import Header from './Header'

class ContentDetail extends Component {
  render () {
    const data = this.props.fetchCover
    let filterCover = data.filter(newData =>
      newData.title.toLocaleLowerCase() ==
      this.props.match.params.name.toLocaleLowerCase()
    )
    let listObject = this.props.fetchDetail
    const image = 'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'

    return (
      <div style={styles.root}>
        <Header location={this.props.location.pathname} />
        <div style={styles.content}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card>
                <CardMedia
                  style={styles.media}
                  image={filterCover[0].imagePreviewUrl}
                  title={filterCover[0].title}
                />
                <CardContent>
                  <List component='nav'>
                    {filterCover[0].object3d.map((object, index) => {
                      return (
                        <div key={index}>
                          <Link to={`/sketch/${object.id}`} style={{ textDecoration: 'none' }}>
                            <ListItem
                              button
                              onClick={() => console.log('Lorem ipsum')}
                            >
                              <ListItemIcon>
                                <Avatar alt='Eric Hoffman' src={object.img_marker} />
                              </ListItemIcon>
                              <ListItemText
                                inset
                                primary={object.title}
                                secondary={object.description}
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
                        </div>
                      )
                    })}
                  </List>
                </CardContent>
                <CardActions>
                  <div style={styles.button}>
                    <Link to={`/add-object/${filterCover[0].id}`} style={{ textDecoration: 'none' }}>
                      <Button variant='raised' color='primary'>
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
const mapStateToProps = state => {
  return {
    fetchCover: state.detailCoverReducers.cover,
    fetchDetail: state.objectReducers.object
  }
}

export default connect(mapStateToProps)(ContentDetail)
