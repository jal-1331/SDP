import React, { useState } from "react";
import "./Image.css"; // Import the CSS

const ImageUpload = () => {
  const defaultImageURL = process.env.PUBLIC_URL + "/insert.jpg"; // Replace with the actual path
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.name = "myImage";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
    };
    input.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleRemove = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-upload-container">
      {selectedImage && (
        <div className="selected-image">
          <img
            alt="not found"
            width={"250px"}
            height={"250px"}
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
            width={"250px"}
            height={"250px"}
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
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUpload;