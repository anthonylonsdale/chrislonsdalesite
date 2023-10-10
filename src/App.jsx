import React from 'react'

import AppFooter from './components/ChrisFooter.jsx'
import CustomHeader from './components/ChrisHeader.jsx'
import ContactForm from './components/ContactForm.jsx'
import Homescreen from './pages/Homescreen.jsx'

function App() {
  return (
    <>
      <CustomHeader />
      <Homescreen />
      <ContactForm />
      <AppFooter />
    </>
  )
}

export default App
