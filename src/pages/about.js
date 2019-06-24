import React from 'react'
import '../css/about.css'
import Link from 'gatsby-link'

const AboutPage = () => {
    return (
    <div className="about">
        <div className="container">
            <h5>
                <Link to="/" style={{color:'white'}}>/ Home</Link>
            </h5>
            <h1>About Us</h1>
            <p>Developed and Maintained by <a target="blank" href="https://twitter.com/shoyeb_memon">Shoyeb Memon</a></p>
        </div>
    </div>
    )
}

export default AboutPage