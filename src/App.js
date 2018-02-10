import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

class App extends Component {
  state = {
    images: []
  }

  handleFile(event) {
    const images = []
    const files = event.target.files

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = event => {
        images.push(event.target.result)
      }
      reader.readAsDataURL(files[i]);
    }
    this.setState({images})
  }

  handleUpload() {
    const image = this.state.images[0]

    this.props
      .mutate({
        variables: { image }
      })
      .then(({ data }) => console.log('got data', data))
      .catch(err => console.log('got error', err))
  }

  render() {
    return (
      <div>
        <input
          style={{display: 'none'}}
          type='file'
          accept='image/*'
          onChange={this.handleFile.bind(this)}
          ref={input => this.inputImage = input}
        />

        <button onClick={() => this.inputImage.click()}>Add file</button>
        <button onClick={this.handleUpload.bind(this)}>Upload file</button>
      </div>
    );
  }
}

const query = gql`
  mutation createPost($image: String!) {
    createPost (
      image: $image
    ) {
      id image
    }
  }
`

export default graphql(query)(App);
