import React, { useState } from 'react'
import './Block.css'

const Block = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Block
