import React from "react";
import img1 from "../../photos/advantages/f1.png";
import img2 from "../../photos/advantages/f2.png";
import img3 from "../../photos/advantages/f3.png";
import img4 from "../../photos/advantages/f4.png";
import styles from './ButtonBaseDemo.module.css'; // Import the CSS file

const images = [
  {
    url: img1,
    title: "Authentic OEM Products",
    discription: "Dependable and Authentic Parts at Affordable Prices.",
    width: "30%",
  },
  {
    url: img2,
    title: "Fair and Transparent Pricing",
    discription: "Clear On-Call Quotations",
    width: "25%",
  },
  {
    url: img3,
    title: "Cutting-Edge Workshop",
    discription: "very skilled service personnel ",
    width: "25%",
  },
  {
    url: img4,
    title: "Door Step Quick Service ",
    discription: "set-up and drop-off locations ",
    width: "20%",
  },
];

export default function ButtonBaseDemo() {
  return (
    <div>
      <h4 className={`${styles.title_Adv}`}>▶ Advantages of GearUpGarage</h4>
      <div className={`${styles.imagecontainer}`}>
        {images.map((image) => (
          <div
            className={`${styles.imagebutton}`}
            style={{
              backgroundImage: `url(${image.url})`,
              width: image.width,
            }}
            key={image.title}
          >
            <div className={`${styles.imagebackdrop}`}/>
            <div className={`${styles.image}`}>
              <span className={`${styles.imagetext}`}>
                {image.title}
                <br />
                {image.discription}
              </span>
              <span className={`${styles.imagemarked}`}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
