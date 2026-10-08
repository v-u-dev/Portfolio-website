import Navbar from "../navbar/navbar";
import Footer from "../Components/footer";
import '../styles/style.css';

function MainPage(){
    return(
        <>
        <header id="home" className="hero">
            <Navbar />

            <div className="hero-content">
                <h2>Victor | Web Developer</h2>

                <p>
                    I create responsive landingpages, websites and web applications with React, CSS, TypeScript, and Express.
                </p>
            </div>
        </header>

        <section id="about" className="section">
            <h2>About</h2>
            <div className="about-content">
                <p>
                    I’m Victor, a Computer Science student at Nile University with a strong interest in web development.
                </p>
                <p>
                    I enjoy building responsive and user-friendly websites and web applications, working on both the frontend and backend development. I focus on writing clean, organized code and creating interfaces that work well across different devices.
                </p>
            </div>

        </section>

        <section id="skills" className="section">
            <h2>Skills</h2>
            <ul className="skills-list">
                <li>
                    HTML & CSS
                </li>

                <li>
                    JavaScript & TypeScript
                </li>

                <li>
                    React
                </li>

                <li>
                    Express.js
                </li>

                <li>
                    Vercel
                </li>

            {/* <li>
                    Paystack
                </li> */}
            </ul>
        </section>

        <section id="projects" className="section">
            <h2>View My Works</h2>


            <div className="projects-grid">
                <a href="https://wine-palace.vercel.app/">
                <div className="project-card">
                    <p>Wine Palace</p>
                </div>
                </a>
                <div className="project-card">
                    <p>project b</p>
                </div>
                <div className="project-card">
                    <p>Coming Soon</p>
                </div>
            </div>
        </section>

        <section id="services" className="section">
            <h2>Services</h2>

            <div className="service-grid">
                <div className="service-card">
                    <h4>Frontend Development</h4>
                </div>

                <div className="service-card">
                    <h4>Backend Development</h4>
                </div>

                <div className="service-card">
                    <h4>Database integration</h4>
                </div>

                <div className="service-card">
                    <h4>Full-stack Projects</h4>
                </div>
            </div>
        </section>

        <section id="contact" className="section">
            <h2>Contact</h2>
            <div className="contact-content">
                <p>Have a project in mind?</p>
                <p>Feel free to reach out.</p>
                
                <div className="contact-links">
                    <a href="victor.uchenna.dev@gmail.com">Email</a>
                    <a href="" target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
            <Footer />
        </section>
        </>
    )

}

export default MainPage;