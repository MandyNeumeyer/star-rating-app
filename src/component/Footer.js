import React from 'react'

let dateCurr = new Date();
let year = dateCurr.getFullYear()

const Footer = () => {
    return (
        <div className="Footer">
            <p>&copy; {year} of Star⭐ Industries Inc.</p>
        </div>
    )
}

export default Footer
