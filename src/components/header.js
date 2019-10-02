import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="container"
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Shoyeb Memon`,
}

export default Header
