import React, { useState } from 'react'
import './Image.css' // Import the CSS

const ImageUpload = () => {
  const defaultImageURL = process.env.PUBLIC_URL + '/insert.jpg' // Replace with the actual path
  const [selectedImage, setSelectedImage] = useState(null)
  const [predictions, setPredictions] = useState(null)

  const handleImageClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.name = 'myImage'
    input.accept = 'image/*'
    input.onchange = (event) => {
      const file = event.target.files[0]
      setSelectedImage(file)
    }
    input.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleRemove = () => {
    setSelectedImage(null)
    setPredictions(null) // Clear predictions when removing image
  }

  const handlePredict = () => {
    if (!selectedImage) return
    const formData = new FormData()
    formData.append('file', selectedImage)
    fetch('http://localhost:3005/predict', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.predictions)
        const arr = data.predictions.map((prediction, index) => {
          return prediction
        })
        console.log(arr)
        const maxValue = Math.max(...arr)
        console.log(maxValue)
        setPredictions(data.predictions)
      })
      .catch((error) => console.error('Error:', error))
  }

  return (
    <div className="image-upload-container">
      {selectedImage && (
        <div className="selected-image">
          <img
            alt="not found"
            width={'250px'}
            height={'250px'}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}

      {!selectedImage && (
        <div className="default-image" onClick={handleImageClick}>
          <img
            alt="default"
            width={'250px'}
            height={'250px'}
            src={defaultImageURL}
          />
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {selectedImage && (
        <div>
          <button onClick={handlePredict}>Predict</button>
          {predictions && (
            <div className="predictions">
              <h3>Predictions:</h3>
              <ul>
                {predictions.map((prediction, index) => (
                  <li key={index}>{prediction}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ImageUpload
