import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import 'typeface-caveat';
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div>
        <h1 style={{ margin: 0 , fontFamily: "caveat"}}>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <nav>
        <ul style={{listStyle: "none"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
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
