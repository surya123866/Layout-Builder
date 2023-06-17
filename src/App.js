import {Component, createContext, useState} from 'react'
import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

const App = () => {
  const [showContent, setShowContent] = useState(true)
  const [showLeftNavbar, setShowLeftNavbar] = useState(true)
  const [showRightNavbar, setShowRightNavbar] = useState(true)

  const onToggleShowContent = () => {
    setShowContent(!showContent)
  }
  const onToggleShowLeftNavbar = () => {
    setShowLeftNavbar(!showLeftNavbar)
  }

  const onToggleShowRightNavbar = () => {
    setShowRightNavbar(!showRightNavbar)
  }

  return (
    <div>
      <ConfigurationContext.Provider
        value={{
          showRightNavbar,
          showLeftNavbar,
          showContent,
          setShowContent,
          setShowLeftNavbar,
          setShowRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    </div>
  )
}

export default App
