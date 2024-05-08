import React, { useState } from "react";
import styles from "../Login/Login.module.css";
const SignUp = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");
  console.log(role);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (role === "Customer") {
      const data = { first_name, last_name, email, password };
      fetch("http://localhost:3001/Customer_register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          alert("You are SignedUp Sucessufully");
          window.location = "/login";
        })
        .catch((error) => console.log(error));
    }else if(role === "Mechanic"){
      const data = { first_name, last_name, email, password };
      fetch("http://localhost:3001/Employee_register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          alert("You are SignedUp Sucessufully");
          window.location = "/login";
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className={`${styles.body}`}>
      <section className={`${styles.section}`}>
        <div className={`${styles.login}`}>
          <h2>SIGN UP</h2>
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
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <div className={`${styles.dropdown}`}>
                <label for="Role">Choose Your Role:</label>
                <select
                  name="Role"
                  id="Role"
                  onChange={(e) => {
                    setrole(e.target.value);
                  }}
                  required
                >
                  <option value="" disabled selected>
                    Role
                  </option>
                  <option value="Customer">Customer</option>
                  <option value="Mechanic">Mechanic</option>
                </select>
              </div>
              <input type="submit" value="SIGN UP" id={`${styles.btn}`} />
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
