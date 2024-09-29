import styles from './Skills.module.css'
function Skills() {
    return (
        <div className="container py-5 mt-lg-0 mt-3 d-flex justify-content-center vh-100">
            <div className='w-75 pt-md-5 mt-md-5'>
                <p className={`${styles.skillsTitle}`}>MY SPECIALTY</p>
                <h2 className={`${styles.skillsHeading}`}>MY SKILLS</h2>
                <p className={`${styles.skillsText}`}>
                    As a junior React.js developer, I have a solid foundation in front-end technologies, including HTML, CSS, and JavaScript. I am skilled in building interactive and responsive user interfaces using React.js and leveraging Bootstrap for styling and layout. With a focus on creating clean and efficient code, I enjoy developing dynamic web applications and continuously enhancing my skills to deliver modern, user-friendly solutions.
                </p>

                <div className="row">
                    <div className="col-md-6">

                        <div className='d-flex align-items-center '>
                            <i className={`fa-brands fa-html5 text-danger fs-3 fs-md-1 mt-3 pe-2`}></i>
                            <h3 className={`mb-2 ${styles.progressTitle} d-inline`}>HTML5</h3>
                        </div>


                        <div className={`${styles.proColor1} ${styles.progress}`}>
                            <div role="progressbar" className={`${styles.progressBar}`} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }}>
                            </div>
                        </div>

                        <div className='d-flex align-items-center '>
                            <i className={`fa-brands fa-css3 text-info fs-3 fs-md-1 mt-3 pe-2`}></i>
                            <h3 className={`mb-2 ${styles.progressTitle} d-inline`}>CSS3</h3>
                        </div>

                        <div className={`${styles.proColor2} ${styles.progress}`}>
                            <div role="progressbar" className={`${styles.progressBar2}`} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                            </div>
                        </div>

                        <div className='d-flex align-items-center '>
                            <i className={`fa-brands fa-js text-warning fs-3 fs-md-1 mt-3 pe-2`}></i>
                            <h3 className={`mb-2 ${styles.progressTitle} d-inline`}>Javascript</h3>
                        </div>

                        <div className={`${styles.proColor3} ${styles.progress}`}>
                            <div role="progressbar" className={`${styles.progressBar3}`} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='d-flex align-items-center '>
                            <i className={`fa-brands fa-bootstrap fs-3 fs-md-1 mt-3 pe-2`} style={{ color: "purple" }}></i>
                            <h3 className={`mb-2 ${styles.progressTitle} d-inline`}>Bootstrap</h3>
                        </div>

                        <div className={`${styles.progress} ${styles.proColor4}`}>
                            <div className={`${styles.progressBar4}`} role='progressbar' aria-valuemin={0} aria-valuenow={90} aria-valuemax={100} style={{ width: "90%" }}>
                            </div>

                        </div>


                        <div className='d-flex align-items-center '>
                            <i className={`fa-brands fa-react fs-3 fs-md-1 mt-3 pe-2 text-info`}></i>
                            <h3 className={`mb-2 ${styles.progressTitle} d-inline`}>React JS</h3>
                        </div>

                        <div className={`${styles.progress} ${styles.proColor5}`}>
                            <div className={`${styles.progressBar5}`} role='progressbar' aria-valuemin={0} aria-valuenow={90} aria-valuemax={100} style={{ width: "85%" }}>
                            </div>

                        </div>

                        <div className='d-flex align-items-center '>
                            <i className={`fa-solid fa-server fs-3 fs-md-1 mt-3 pe-2 text-secondary`}></i>
                            <h3 className={`mb-2 ${styles.progressTitle} d-inline`}>Next JS</h3>
                        </div>

                        <div className={`${styles.progress} ${styles.proColor6}`}>
                            <div className={`${styles.progressBar6}`} role='progressbar' aria-valuemin={0} aria-valuenow={70} aria-valuemax={100} style={{ width: "70%" }}>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
