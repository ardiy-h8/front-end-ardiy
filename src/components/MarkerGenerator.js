import React, { Component } from 'react'
var THREEx = THREEx || {}

THREEx.ArPatternFile = {}



THREEx.ArPatternFile.encodeImageUrl = (imageURL, onComplete) => {
  var image = new Image;
  console.log('image------1', image)

  image.onload = function () {
    console.log('masuk siin')
    console.log(image, 'image, onload')
    var patternFileString = THREEx.ArPatternFile.encodeImage(image)
    onComplete(patternFileString)
  }
  console.log(image.onload())
  image.src = imageURL;
  console.log('image-----2', imageURL)
  console.log('image-----2', image.src)
}



THREEx.ArPatternFile.encodeImage = function (image) {
  // copy image on canvas
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d')
  canvas.width = 16;
  canvas.height = 16;
  
  // document.body.appendChild(canvas)
  // canvas.style.width = '200px'
  
  
  var patternFileString = ''
  for (var orientation = 0; orientation > -2 * Math.PI; orientation -= Math.PI / 2) {
    // draw on canvas - honor orientation
    context.save();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(orientation);
    context.drawImage(image, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    context.restore();
    
    console.log(context, 'context')
    // get imageData
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height)
    console.log(imageData, 'image data')
    // generate the patternFileString for this orientation
    if (orientation !== 0) patternFileString += '\n'
    // NOTE bgr order and not rgb!!! so from 2 to 0
    for (var channelOffset = 2; channelOffset >= 0; channelOffset--) {
      // console.log('channelOffset', channelOffset)
      for (var y = 0; y < imageData.height; y++) {
        for (var x = 0; x < imageData.width; x++) {

          if (x !== 0) patternFileString += ' '

          var offset = (y * imageData.width * 4) + (x * 4) + channelOffset
          var value = imageData.data[offset]
          
          patternFileString += String(value).padStart(3);
        }
        patternFileString += '\n'
      }
    }
  }
  // console.log(patternFileString, 'patt')
  return patternFileString
}

//////////////////////////////////////////////////////////////////////////////
//		trigger download
//////////////////////////////////////////////////////////////////////////////

THREEx.ArPatternFile.triggerDownload = (patternFileString) => {
  // tech from https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
  var domElement = window.document.createElement('a');
  domElement.href = window.URL.createObjectURL(new Blob([patternFileString], { type: 'text/plain' }));
  domElement.download = 'pattern-marker.patt';
  document.body.appendChild(domElement)
  domElement.click();
  document.body.removeChild(domElement)
}




  THREEx.ArPatternFile.buildFullMarker = function (innerImageURL, onComplete) {
    console.log(innerImageURL, 'build')
    var whiteMargin = 0.1
    var blackMargin = 0.2
    var innerMargin = whiteMargin + blackMargin

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d')
    canvas.width = canvas.height = 512

    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height)

    //   // copy image on canvas
    context.fillStyle = 'black';
    context.fillRect(
      whiteMargin * canvas.width,
      whiteMargin * canvas.height,
      canvas.width * (1 - 2 * whiteMargin),
      canvas.height * (1 - 2 * whiteMargin)
    );

    //   // clear the area for innerImage (in case of transparent image)
    context.fillStyle = 'white';
    context.fillRect(
      innerMargin * canvas.width,
      innerMargin * canvas.height,
      canvas.width * (1 - 2 * innerMargin),
      canvas.height * (1 - 2 * innerMargin)
    );


    //   // display innerImage in the middle
    var innerImage = document.createElement('img')
    innerImage.addEventListener('load', function () {
      // draw innerImage
      context.drawImage(innerImage,
        innerMargin * canvas.width,
        innerMargin * canvas.height,
        canvas.width * (1 - 2 * innerMargin),
        canvas.height * (1 - 2 * innerMargin)
      );

      
      console.log(imageUrl, 'inner')
      onComplete(imageUrl)
    })
    var imageUrl = canvas.toDataURL()
    innerImage.src = innerImageURL
    onComplete(imageUrl)
    console.log(innerImage.src, '=-=-=-=-')
  }





class markerGenerator extends Component {
  constructor() {
    super()
    this.image = ''
    this.handleUpload = this.handleUpload.bind(this)
    this.handleDownload = this.handleDownload.bind(this)
  }

  handleUpload(e) {
    console.log(e.target.files)
    // this.setState({
    //   image: e.target.files
    // }) 
    var url = e.target.files[0].name
    THREEx.ArPatternFile.buildFullMarker(url, function onComplete(newUrl){
      THREEx.ArPatternFile.encodeImageUrl(newUrl, function onComplete(patternFileString) {
        THREEx.ArPatternFile.triggerDownload(newUrl)
      })  
    })
   
    
  }
  
  handleDownload() {
     
    
  }

  render() {
    return(
      <div>
        <input type="file" name="upload" onChange={this.handleUpload} />
        <button onClick={this.handleDownload}>download</button>
      </div>
    )
  }
}


export default markerGenerator