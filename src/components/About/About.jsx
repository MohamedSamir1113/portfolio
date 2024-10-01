import styles from './About.module.css'
function About() {
    return (
        <div className="container py-5 mt-lg-0 mt-3 d-flex justify-content-center vh-100">
            <div className='w-75 pt-md-5 mt-md-5'>
                <p className={`${styles.aboutTitle}`}>ABOUT ME</p>
                <h2 className={`${styles.aboutHeading}`}>WHO Am I ?</h2>
                <p className={`${styles.aboutText}`}>
                    <strong>Hi Im Mohamed Samir </strong>
                    Iam 23 Years Old Computer Science Graduate Cairo Universty class 2023 , I Live in Cairo Egypt , Iam so Passionate about the front end developmet field since early college days,I have been studying and practicing web development for the past 2 years.
                </p>
                <p className={`${styles.aboutText}`}>
                    My background includes developing web applications, creating user interfaces, and coding with HTML, CSS, JavaScript and React js Framework. I am experienced in creating high-performance, responsive websites from scratch, as well as maintaining and optimizing existing sites. 
                </p>
                <div className="row">
                    <div className="col-md-3">
                       <div className={`${styles.services} ${styles.color1}`}>
                       <i className={`fa-regular fa-lightbulb ${styles.iconColor1}`}></i>
                       <h3>Graphic Design</h3>
                       </div>
                    </div>
                    <div className="col-md-3">
                       <div className={`${styles.services} ${styles.color2} `}>
                       <i className={`fa-solid fa-earth-africa ${styles.iconColor2}`}></i>
                       <h3>Web Development</h3>
                       </div>
                    </div>
                    <div className="col-md-3">
                       <div className={`${styles.services} ${styles.color3}`}>
                       <i className={`fa-solid fa-database ${styles.iconColor3}`}></i>
                       <h3>Software</h3>
                       </div>
                    </div>
                    <div className="col-md-3">
                       <div className={`${styles.services} ${styles.color4}`}>
                       <i className={`fa-solid fa-mobile-screen-button ${styles.iconColor4}`}></i>
                       <h3>Application</h3>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
