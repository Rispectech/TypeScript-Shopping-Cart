import React from 'react'
import ShopContainer from './Components/ShopContainer'
import { ShopAppBar } from './Components/AppBar'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <section>
      <ShopAppBar />
      <ShopContainer />
    </section>
  )
}

export default App
