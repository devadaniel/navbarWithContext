import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {isDarkTheme ? (
            <div className="header-dark-container">
              <nav className="navbar-dark-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  className="website-log-image"
                  alt="website logo"
                />
                <ul className="list-items-dark-container">
                  <Link to="/" className="dark-link-item">
                    <li>Home</li>
                  </Link>
                  <Link to="/about" className="dark-link-item">
                    <li>About</li>
                  </Link>
                </ul>
                <button
                  className="dark-button"
                  type="button"
                  onClick={toggleTheme}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="light-theme-image"
                  />
                </button>
              </nav>
            </div>
          ) : (
            <div className="header-light-container">
              <nav className="navbar-light-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="website-log-image"
                />
                <ul className="list-item-light-container">
                  <Link to="/" className="light-link-item">
                    <li className="light-items">Home</li>
                  </Link>
                  <Link to="/about" className="light-link-item">
                    <li className="light-items">About</li>
                  </Link>
                </ul>
                <button
                  className="light-button-container"
                  type="button"
                  onClick={toggleTheme}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="dark-theme-image"
                  />
                </button>
              </nav>
              <hr />
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
