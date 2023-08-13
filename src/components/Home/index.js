// Write your code here

import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="home-light-image"
                  alt="home"
                />
                <h1 className="home-light-heading">Home</h1>
              </div>
            </div>
          ) : (
            <div className="home-dark-main-container">
              <Navbar />
              <div className="home-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  className="home-dark-image"
                  alt="home"
                />
                <h1 className="home-dark-heading">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
