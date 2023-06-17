import React, {useContext} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => {
  const context = useContext(ConfigurationContext)
  const {showRightNavbar, showLeftNavbar, showContent} = context
  return (
    <div>
      {showLeftNavbar && (
        <div>
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </div>
      )}
      {showContent && (
        <div>
          <h1>Content</h1>
          <p>Lorem ipsum</p>
        </div>
      )}
      {showRightNavbar && (
        <div>
          <h1>Right Navbar Menu</h1>
          <p>Ad 1</p>
          <p>Ad 2</p>
        </div>
      )}
    </div>
  )
}

export default Body
