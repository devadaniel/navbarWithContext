// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const NotFound = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="home-light-image"
                  alt="not found"
                />
                <h1 className="home-light-heading">Lost Your Way?</h1>
                <p className="not-found-light-description">
                  We cannot seem to find the page
                </p>
              </div>
            </div>
          ) : (
            <div className="home-dark-main-container">
              <Navbar />
              <div className="home-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="home-dark-image"
                  alt="not found"
                />
                <h1 className="home-dark-heading">Lost Your Way?</h1>
                <p className="not-found-dark-description">
                  We cannot seem to find the page
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
