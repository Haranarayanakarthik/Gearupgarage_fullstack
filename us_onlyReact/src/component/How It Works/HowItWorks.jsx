import React from "react";
import styles from "./HowItWorks.module.css"; // Import the CSS file
import img1 from "./1-square-fill.svg";
import img2 from "./2-square-fill.svg";
import img3 from "./3-square-fill.svg";
import img4 from "./4-square-fill.svg";
const Sec_2 = () => {
  const points = [
    {
      title: "Choose Your Service From Our Wide Range Of Offerings",
      icon: img1, // Replace with your own icons
    },
    {
      title: "Make An Appointment With Us",
      icon: img2, // Replace with your own icons
    },
    {
      title: "Always Get a Fair Quote",
      icon: img3, // Replace with your own icons
    },
    {
      title: "Obtain a Door Step Pick-Up and Drop Service",
      icon: img4, // Replace with your own icons
    },
  ];

  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.leftside}`}>
            <h2 className={`${styles.title_des}`}>How It Works</h2>
            <p className={`${styles.description}`}>
              GearUpGarage simplifies the process of servicing or repairing your
              vehicle, ensuring convenience and simplicity.
            </p>
            <form className={`${styles.form}`}>
              <a href="/login" className={`${styles.button}`}>
                 Get Started
              </a>
            </form>
          </div>
          <div className={`${styles.rightside}`}>
            <div className={`${styles.grid}`}>
              {points.map((point, index) => (
                <div className={`${styles.card_HowItWorks}`} key={index}>
                  <div className={styles.cardicon}>
                    <img src={point.icon} alt="" />
                  </div>
                  <p className={`${styles.cardtitle}`}>{point.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec_2;
