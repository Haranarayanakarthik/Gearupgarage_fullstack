import React from "react";
import Faq from "react-faq-component";

const App = () => {
  const data = {
    rows: [
      {
        title: "How does the service work?",
        content:
          "Our expert technicians will come to your location at the scheduled time. Sit back, relax, and let us take care of your vehicle with precision and speed.",
      },
      {
        title: "Is the service reliable?",
        content:
          "Absolutely! We pride ourselves on our professionalism and commitment to excellence. Your satisfaction is our top priority.",
      },
      {
        title: "What areas do you cover?",
        content:
          "We offer our mobile automotive repair services in the greater metropolitan area. Contact us to check availability in your location.",
      },
      {
        title: "Do you provide warranty for repairs?",
        content:
          "Yes, we stand by our work. All repairs come with a warranty for your peace of mind. Drive confidently knowing your vehicle is in good hands.",
      },
      {
        title: "How can I book a service?",
        content:
          "Booking with GearUpGarage is a breeze. Simply click on the 'Book Now' button, choose your preferred date and time, and get ready for a seamless experience.",
      },
    ],
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px",height:"100vh" }}>
      <h2 style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
        Frequently Asked Questions
      </h2>
      <Faq data={data} />
    </div>
  );
};

export default App;
