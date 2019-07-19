import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    const { active } = this.state
    // toggle the active boolean in the state
    this.setState(
      {
        active: !active,
      },
      // after state has been updated,
      () =>
        // set the class in state for the navbar accordingly
        active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            }),
    )
  }

  render() {
    const { navBarActiveClass } = this.state
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => this.toggleHamburger()}
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
