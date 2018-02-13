/* globals THREE, requestAnimationFrame */
import React, { Component } from 'react'
import initializeRenderer from '../utils/initializeRenderer'
import { initializeArToolkit, getMarker } from '../utils/arToolkit'
import ColladaLoader from 'three-collada-loader-2'
import { connect } from 'react-redux'

export const sketchRendererFactory = ({
  THREE,
  initializeArToolkit,
  initializeRenderer,
  getMarker,
  requestAnimationFrame
}) => {
  const { Camera, Group, Scene } = THREE

  return class SketchRenderer extends Component {
    componentWillMount() {
      const {
        coordX,
        coordZ,
        scaleX,
        scaleY,
        scaleZ,
        rotation,
        onMarkerFound,
        objectReducers
      } = this.props

      const renderer = (this.renderer = initializeRenderer(this.canvas))

      const scene = new Scene()
      const camera = new Camera()
      scene.add(camera)

      const markerRoot = new Group()
      scene.add(markerRoot)
      const onRenderFcts = []
      const arToolkitContext = initializeArToolkit(
        renderer,
        camera,
        onRenderFcts
      )
      console.log('pattern:\n', objectReducers.pattern)
      const marker = getMarker(
        arToolkitContext,
        markerRoot,
        objectReducers.pattern
      )

      marker.addEventListener('markerFound', onMarkerFound)

      // ColladaLoader
      console.log('dae:\n', objectReducers.dae)
      let loader = new ColladaLoader()
      loader.options.convertUpAxis = true
      loader.load(
        objectReducers.dae,
        collada => {
          this.avatar = collada.scene
          this.avatar.needsUpdate = true
          /*this.avatar.position.x = coordX
          this.avatar.position.z = coordZ
          this.avatar.scale.x = scaleX
          this.avatar.scale.y = scaleY
          this.avatar.scale.z = scaleZ
          this.avatar.rotation.z = rotation*/
          console.log(this.avatar, 'avatar', '1')
          scene.add(this.avatar)
          markerRoot.add(this.avatar)
        },
        function(xhr) {
          console.log(xhr.loaded / xhr.total * 100 + '% loaded')
        },

        // onError callback
        function(err) {
          console.error('An error happened', err)
        }
      )
      var ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
      scene.add(ambientLight)

      var directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(1, 1, -1)
      scene.add(directionalLight)

      // render the scene
      onRenderFcts.push(function() {
        renderer.render(scene, camera)
      })

      // run the rendering loop
      var lastTimeMsec = null

      function animate(nowMsec) {
        // keep looping
        requestAnimationFrame(animate)
        // measure time
        lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
        const deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
        lastTimeMsec = nowMsec
        // call each update function
        onRenderFcts.forEach(onRenderFct => {
          onRenderFct(deltaMsec / 1000, nowMsec / 1000)
        })
      }
      requestAnimationFrame(animate)
    }

    componentWillUnmount() {
      this.renderer.dispose()
    }

    storeRef = node => {
      this.canvas = node
    }

    componentDidUpdate() {
      const { coordX, coordZ, scaleX, scaleY, scaleZ, rotation } = this.props
      const { avatar } = this
      console.log('avatar', avatar)
      this.avatar.position.x = coordX
      this.avatar.position.z = coordZ
      this.avatar.scale.x = scaleX
      this.avatar.scale.y = scaleY
      this.avatar.scale.z = scaleZ
      this.avatar.rotation.z = rotation
      this.avatar.needsUpdate = true
    }

    render() {
      return <canvas id="root" ref={this.storeRef} />
    }
  }
}

const mapStateToProps = state => ({
  objectReducers: state.objectReducers.objectReducers
})

export default connect(mapStateToProps)(
  sketchRendererFactory({
    THREE,
    initializeArToolkit,
    getMarker,
    initializeRenderer,
    requestAnimationFrame: requestAnimationFrame
  })
)
