import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

class App extends Component {
  state = {
    zipFile: ''
  }

  handleFile(event) {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => this.setState({ zipFile: reader.result })
    reader.readAsDataURL(file)
  }

  handleUpload() {
    const zip_file = this.state.zipFile

    this.props
      .mutate({
        variables: { zip_file }
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
          accept='application/zip'
          onChange={this.handleFile.bind(this)}
          ref={input => this.cover = input}
        />

        <button onClick={() => this.cover.click()}>Add Zip file</button>
        <button onClick={this.handleUpload.bind(this)}>Upload file</button>
      </div>
    );
  }
}

const query = gql`
  mutation createPost ($zip_file: String!) {
    createPost (zip_file: $zip_file) {
      id zip_file
    }
  }
`

export default graphql(query)(App);
