import React from 'react'

const footer = () => {
    return(
        <div>
            <footer>
            © {new Date().getFullYear()}, Created by
            {` `}
            <a href="https://twitter.com/shoyeb_memon">Shoyeb Memon</a>
            </footer>    
        </div>
    )
}

export default footer