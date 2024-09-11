import React from 'react'
import Pages from './components/pages/Pages'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  AOS.init();
  return (
  <Pages/>
  )
}

export default App
