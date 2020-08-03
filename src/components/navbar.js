import React from 'react'
import { Link } from 'gatsby'

import doyle from '../images/doyle-roth.png';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <figure class="image is-400x80">
              <a href="/"><img src={doyle} alt="logo"/></a>
            </figure>


            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact Us
              </Link>
              <Link className="navbar-item" to="/principles">
                Principles
              </Link>
              <Link className="navbar-item" to="/engineering">
                Engineering
              </Link>
              <Link className="navbar-item" to="/fabrication">
                Fabrication
              </Link>
              <Link className="navbar-item" to="/capability">
                Capability
              </Link>
              <Link className="navbar-item" to="/inventory">
                Inventory
              </Link>
              <Link className="navbar-item" to="/tema">
                TEMA
              </Link>
              <Link className="navbar-item" to="/exchanger">
                Exchanger Selection
              </Link>

            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
