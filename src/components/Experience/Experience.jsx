import styles from './Experience.module.css'
function Experience() {
    return (
        <div className="container py-5 mt-lg-0 mt-3 d-flex justify-content-center vh-100">
            <div className='w-75 pt-md-5 mt-md-5'>
                <p className={`${styles.experienceTitle}`}>EXPERIENCE</p>
                <h2 className={`${styles.experienceHeading}`}>WORK EXPERIENCE</h2>

                <ul className={`${styles.listItems}`}>
                    <li>
                        <div className={`${styles.listItemBadge}`}>
                            <i className="fa-solid fa-pencil"></i>
                        </div>

                        <div className={`${styles.listItemContentBox}`}>
                            <h2>
                                <a href="#">Front-end Developer Intern in T.I.T Solutions</a><span> jun 2024-aug 2024</span>
                            </h2>

                            <p>I increased  my experience in the front-end field with my team by doing some projects using html, css, js, reactjs. Improved my soft skills by working with my team.</p>
                        </div>
                    </li>
                    
                    
                    <li className='pt-4'>
                        <div className={`${styles.listItemBadge2}`}>
                            <i className="fa-solid fa-pencil"></i>
                        </div>

                        <div className={`${styles.listItemContentBox}`}>
                            <h2>
                                <a href="#">Front-end Developer Trainee in Upskilling EG</a><span> sep 2024-nov 2024</span>
                            </h2>

                            <p>I Studied more Advanced React topics and Next Js and I also Worked in multiple Advanced Projects</p>
                        </div>
                    </li>

                    <li>
                        <div className={`${styles.listItemBadge3}`}>
                        </div>
                    </li>


                </ul>

            </div>
        </div>
    )
}

export default Experience
