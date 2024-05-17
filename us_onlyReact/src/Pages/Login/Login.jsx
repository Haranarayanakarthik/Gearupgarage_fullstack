import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const backendUrl = process.env.REACT_APP_Backend_URL;
  console.log(backendUrl);  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setUser(result.user);
        alert("Login successful");
        if (result.user.type == "Customer") {
          navigate("/dashboard_cus"); // Redirect to Dashboard after successful login
        }
        else if(result.user.type == "Employee"){
          navigate("/dashboard_emp");
        }
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`${styles.body}`}>
      <section className={`${styles.section}`}>
        <div className={`${styles.login}`}>
          <form onSubmit={handleSubmit}>
            <h2>SIGN IN</h2>
            <div className={`${styles.inputBox}`}>
              <input
                type="text"
                placeholder="Username"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={`${styles.inputBox}`}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
