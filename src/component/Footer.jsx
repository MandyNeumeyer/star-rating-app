
const dateCurr = new Date();
const year = dateCurr.getFullYear()

const Footer = () => {
    return (
        <div className="Footer">
            <p>Copyrigth &copy; {year} Star⭐ Industries Inc.</p>
        </div>
    )
}

export default Footer
