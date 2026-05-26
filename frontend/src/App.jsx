import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('Connecting to backend...')

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(error => {
        setMessage('❌ Could not connect to backend. Make sure it is running.')
        console.error(error)
      })
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <h1 className="text-5xl mb-4">🍕</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Pizza Delivery
        </h2>
        <p className="text-gray-500 mb-6">Full-stack MERN application</p>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Backend Status:</p>
          <p className="text-gray-800 font-medium">{message}</p>
        </div>
        <p className="text-xs text-gray-400 mt-6">By Liana Jomaa</p>
      </div>
    </div>
  )
}

export default App