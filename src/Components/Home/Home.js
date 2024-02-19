import React from 'react'
import ImageUpload from './ImageUpload'
import './Home.css'
import Disease from './Disease'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import Info from '../Info'
import Alldetail from '../Detail/Alldetail'

const Home = () => {
  const navigate = useNavigate()

  const handleonclick = () => {
    navigate('/Info')
  }
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="Image">
          <h2>Insert Your Leaf Image Here..</h2>
          <ImageUpload />

          {/* <button className="button" onClick={handleonclick}>
            How It's Works?
          </button> */}
        </div>

        {/* <div className="disease">
          <Disease />
        </div> */}
        <div className='HIW'></div>
        <Info />
        <Alldetail/>
      </div>
    </>
  )
}

export default Home
