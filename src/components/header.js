import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/ot-for-that-logo.svg'
import 'typeface-caveat';
import 'typeface-open-sans-condensed'
import './header.css';

const Header = ({ siteTitle, location }) => (
  <header>
    <div className="container">
      <div>
        <Link to="/">
          <img src={logo} height="75px" className="logo"/>
        </Link>
      </div>
      <nav>
        <ul>
          <li className={location && location.pathname === "/" ? "current" : ""}><Link to="/">Home</Link></li>
          <li className={location && location.pathname.match(/\/contact\/?/i) ? "current" : ""}><Link to="/contact">Contact</Link></li>
          <li className={location && location.pathname.match(/\/about\/?/i) ? "current" : ""}><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
