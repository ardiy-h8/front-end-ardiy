import React, { Component } from 'react'
import isEqual from 'lodash.isequal'

import SketchRenderer from './SketchRenderer'
import MoveControl from './MoveControl'
import hiro from  '../assets/patt.dota'

class Sketch extends Component {
  state = {
    markerFound: false,
    coord: {
      x: 2,
      z: 1
    },
    rotation: 0,
    scale: {
      x: 2,
      y: 2
    }
  }

  renderer = null

  shouldComponentUpdate (nextProps, state) {
    return !isEqual(state, this.state)
  }

  handleTranslateChange = ({ x, z }) => this.setState({ coord: { x, z } })

  handleZoomChange = ({ x, y }) => this.setState({ scale: { x, y } })

  handleRotationChange = rotation => this.setState({ rotation })

  handleMarkerFound = () => this.setState({ markerFound: true })

  render () {
    const {
      markerFound,
      coord: { x: coordX, z: coordZ },
      scale: { x: scaleX, y: scaleY },
      rotation
    } = this.state
    return (
      <div>
        <SketchRenderer
          coordX={coordX}
          coordZ={coordZ}
          scaleX={scaleX}
          scaleY={scaleY}
          rotation={rotation}
          onMarkerFound={this.handleMarkerFound}
          pattern={hiro}
        />
        {markerFound &&
          <MoveControl
            coordX={coordX}
            coordZ={coordZ}
            scaleX={scaleX}
            scaleY={scaleY}
            rotation={rotation}
            onTranslateChange={this.handleTranslateChange}
            onZoomChange={this.handleZoomChange}
            onRotationChange={this.handleRotationChange}
          />}
      </div>
    )
  }
}

export default Sketch
