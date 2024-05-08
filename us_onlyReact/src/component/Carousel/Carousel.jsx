import React, { useState, useEffect } from 'react';
import img1 from "../../photos/slideshow-1.png";
import img2 from "../../photos/slideshow-2.jpg";
import img3 from "../../photos/slideshow-3.jpg";
import styles from "./Carousel.module.css"
const images = [img1, img2, img3];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let timer;
    if (!isHovering) {
      timer = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
    }

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [currentImageIndex, isHovering]);

  return (
    <div
    className={`${styles.carousel}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img className={`${styles.carouselimage}`} src={images[currentImageIndex]} alt="" />
    </div>
  );
}

export default Carousel;