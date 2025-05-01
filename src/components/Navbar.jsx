import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className='navBar'>
        <a className='left-side nav-zoom' href="/">Movies</a>
        <div className="right-side">
            <a href="/About" className="nav-about nav-zoom">About</a>
            <a href="/contact" className="nav-contact nav-zoom">Contact Us</a>
        </div>
    </nav>
  )
}

export default Navbar