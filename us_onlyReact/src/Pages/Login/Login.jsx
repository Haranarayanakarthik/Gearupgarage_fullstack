import React, { useState } from "react";
import styles from "./Login.module.css";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={`${styles.body}`}>
      <section className={`${styles.section}`}>
        <div className={`${styles.login}`}>
          <form onSubmit={handlesubmit}>
            <h2>SIGN IN</h2>
            <div className={`${styles.inputBox}`}>
              <input
                type="text"
                placeholder="Username"
                name="email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className={`${styles.inputBox}`}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className={`${styles.inputBox}`}>
              <input type="submit" value="Login" id={`${styles.btn}`} />
            </div>
            <div className={`${styles.group}`}>
              <a href="/forgetpassword">Forget Password</a>
              <a href="/signup">Signup</a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
