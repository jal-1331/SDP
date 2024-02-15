import React from 'react'
import ImageUpload from './ImageUpload'
import './Home.css'
import Disease from './Disease'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="Image">
          <ImageUpload />
          <button className="button">How It's Works?</button>
        </div>

        <div className="disease">
          <Disease />
        </div>
      </div>
    </>
  )
}

export default Home
