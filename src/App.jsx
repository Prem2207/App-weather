
import { useState } from 'react'
import './App.css'
import AppWeather from './components/AppWeather'
import Loading from './components/Loading'
function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      {
        isLoading ?
        <AppWeather/>
        :
        <Loading />
      }
      
    </div>
  )
}

export default App