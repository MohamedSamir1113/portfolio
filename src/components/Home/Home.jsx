import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const contentList = [
    { text: "Welcome to Our Site", bg: "/public/img_bg_1-PzvG2r05.jpg" },
    { text: "Iam a Developer", bg: "/public/img_bg_2-DzCs5o-0.jpg" },
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
      <div className="bg-danger"> 
      <h1>{currentContent.text}</h1>
      <button>ok</button>
      </div>
    </header>
  );
}

export default Home;
