import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import 'typeface-caveat';
import 'typeface-open-sans-condensed'
import './header.css';

const Header = ({ siteTitle, location }) => (
  <header>
    <div className="container">
      <div>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li className={location && location.pathname === "/" ? "current" : ""}><Link to="/">Home</Link></li>
          <li className={location && location.pathname === "/contact" ? "current" : ""}><Link to="/contact">Contact</Link></li>
          <li className={location && location.pathname === "/about" ? "current" : ""}><Link to="/about">About</Link></li>
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
