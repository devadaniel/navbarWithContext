// Write your code here

import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div>
              <Navbar />
              <div className="home-light-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="home-light-image"
                  alt="about"
                />
                <h1 className="home-light-heading">About</h1>
              </div>
            </div>
          ) : (
            <div className="home-dark-main-container">
              <Navbar />
              <div className="home-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="home-dark-image"
                  alt="about"
                />
                <h1 className="home-dark-heading">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
