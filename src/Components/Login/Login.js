import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

export default function Login() {
  const [email, setEmail] = useState('')
  const [Message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/api/otp-send', {
        email,
      })

      if (response.status === 200) {
        setMessage('OTP sent successfully')
        navigate('/Verifyotp', { state: { email } }) // Pass email as state
      } else {
        setMessage('Login failed. Please check your email and try again.')
      }
    } catch (error) {
      console.error('Error calling backend:', error)
      setMessage('An error occurred. Please try again later.')
    }
  }
  return (
    <>
      <Navbar />
      <form className="con">
        <div className="container contain1">
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              value={email}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className={`colr mb-4 btn`}
            onClick={handleSubmit}
          >
            Login
          </button>
          <div>
            <p>{Message}</p>
          </div>
        </div>
      </form>
    </>
  )
}
