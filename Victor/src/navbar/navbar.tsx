import '../styles/navbarStyle.css';

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="logo">Portfolio</div>

            <input type="checkbox" id="nav-toggle" className="nav-toggle" />

            <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Toggle menu">
                <span></span>
            </label>

            <ul className="Navlinks">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;