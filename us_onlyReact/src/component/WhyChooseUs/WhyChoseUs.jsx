import React from "react";
import styles from './WhyChooseUsSection.module.css'; // Import the CSS file

const WhyChooseUsSection = () => {
  const points = [
    {
      title: "Convenience at Your Doorstep",
      description:
        "We provide convenient automotive services that come to you, saving you time and making it hassle-free.",
    },
    {
      title: "Skilled technicians, great service.",
      description:
        "Our highly skilled and certified technicians ensure top-notch service with every visit.",
    },
    {
      title: "Transparency and Trust",
      description:
        "We believe in transparent pricing and operations, so you know precisely what you're paying for.",
    },
    {
      title: "Reliability",
      description:
        "You can count on us to be on time and to respond to your questions right away.",
    },
  ];

  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.container}`}>
        <h4 className={`${styles.title_why}`}>Why Choose Us</h4>
        <div className={`${styles.grid}`}>
          {points.map((point, index) => (
            <div className={`${styles.card_why}`} key={index}>
              <div className={`${styles.cardcontent_why}`}>
                <h6 className={`${styles.cardtitle_why}`}>{point.title}</h6>
                <p className={`${styles.carddescription_why}`}>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
