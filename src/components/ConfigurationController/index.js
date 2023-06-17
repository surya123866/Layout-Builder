import React, {useContext} from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => {
  const context = useContext(ConfigurationContext)
  const {
    showRightNavbar,
    showLeftNavbar,
    showContent,
    setShowContent,
    setShowLeftNavbar,
    setShowRightNavbar,
    onToggleShowContent,
    onToggleShowLeftNavbar,
    onToggleShowRightNavbar,
  } = context

  console.log(context)
  return (
    <div className="layoutContainer">
      <div>
        <h1>Layout</h1>
        <div>
          <input
            onChange={onToggleShowContent}
            checked={showContent}
            id="content"
            type="checkbox"
          />
          <label htmlFor="content">Content</label>
        </div>
        <div>
          <input
            onChange={onToggleShowLeftNavbar}
            checked={showLeftNavbar}
            id="left"
            type="checkbox"
          />
          <label htmlFor="left">Left Navbar</label>
        </div>
        <div>
          <input
            onChange={onToggleShowRightNavbar}
            checked={showRightNavbar}
            id="right"
            type="checkbox"
          />
          <label htmlFor="right">Right Navbar</label>
        </div>
      </div>
    </div>
  )
}

export default ConfigurationController
