import React from 'react'
import '../css/footer.css'

import Link from 'gatsby-link'

const footer = () => {
    return(
        <div className="footer" style={{
            padding: `1.45rem 1.0875rem`,
          }}>
            <footer className="container">
            <h5>
                <Link to="/about" style={{color:'white'}}>/ About</Link>
            </h5>
            © {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://twitter.com/shoyeb_memon">Shoyeb Memon</a>
            </footer>    
        </div>
    )
}

export default footer