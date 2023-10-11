import React from 'react'

import AppFooter from './components/ChrisFooter.jsx'
import CustomHeader from './components/ChrisHeader.jsx'
import Homescreen from './pages/Homescreen.jsx'

function App() {
  return (
    <>
      <CustomHeader />
      <Homescreen />
      <AppFooter />
    </>
  )
}

export default App
