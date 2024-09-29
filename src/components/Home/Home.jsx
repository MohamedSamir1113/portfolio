import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home() {
    const contentList = [
        { text: "Hi! Iam Mohamed Samir", bg: "/public/img_bg_1-PzvG2r05.jpg", btnText: "Download CV" },
        { text: "Iam a Frontend Developer", bg: "/public/img_bg_2-DzCs5o-0.jpg", btnText: "View Portfolio" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
                setFade(true);
            }, 1000); // 1 second for the fade-out animation
        }, 5000); // Change content every 5 seconds
        return () => clearInterval(interval);
    }, [contentList.length]);

    const currentContent = contentList[currentIndex];

    return (
        <header
            className={`${styles.header} ${fade ? styles.fadeIn : styles.fadeOut}`}
            style={{ backgroundImage: `url(${currentContent.bg})` }}
        >
            <div className="ms-md-5 ps-md-2 text-center">
                <div>
                    <h1>{currentContent.text}</h1>
                    <button>{currentContent.btnText} {currentContent.btnText.includes("CV") ? <i class="fa-solid fa-download"></i> : <i className="fa-solid fa-briefcase"></i>}</button>
                </div>
            </div>
        </header>
    );
}

export default Home;
