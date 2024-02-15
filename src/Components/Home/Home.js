import React from 'react'
import ImageUpload from './ImageUpload'
import './Home.css'
import Disease from './Disease'


const Home = () => {
  return (
    
    <div className='main'>
        
      <div className='Image'>
      <ImageUpload />
      </div>
      <div className='disease'>
        <Disease />

      </div>
    </div>
  )
}

export default Home
