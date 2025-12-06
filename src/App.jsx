import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-s-screen bg-blue-500 text-white flex items-center justify-center text-4xl font-bold">
      Tailwind is Working ✅
    </div>
    </>
  )
}

export default App
