import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location =useLocation()
  return (
    <div>
      <h1>
        Hello {location.state.id} and welocomne to the home
      </h1>
    </div>
  )
}
