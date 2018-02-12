const decodeBase64Image = image => {
  const matches = image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

  if (!matches) return false
  return {
    mimetype: matches[1],
    buffer: Buffer.from(matches[2], 'base64')
  }
}

export default decodeBase64Image