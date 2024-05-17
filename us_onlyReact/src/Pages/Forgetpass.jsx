import React, { useState } from "react";
import styles from "../Pages/Login/Login.module.css";
const SignUp = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const backendUrl = process.env.REACT_APP_Backend_URL;
  console.log(backendUrl);  
  const handlesubmit = (e) => {
    e.preventDefault();
    const data = { first_name, last_name, email };
    fetch(`${backendUrl}/forgetPassword`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert("Your Password :"+result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={`${styles.body}`}>
      <section className={`${styles.section}`}>
        <div className={`${styles.login}`}>
          <h2>Forget Password</h2>
          <form onSubmit={handlesubmit}>
            <div className={`${styles.inputBox}`}>
              <div className={`${styles.name}`}>
                <input
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  onChange={(e) => setfirst_name(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="last_name"
                  onChange={(e) => setlast_name(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={(e) => setemail(e.target.value)}
              />
              <input type="submit" value="Check" id={`${styles.btn}`} />
            </div>
            <div className={`${styles.group1}`}>
              <a href="/login">already have an account? Sign In</a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
