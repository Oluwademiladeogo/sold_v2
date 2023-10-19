import "./Signup.css";
import { react, useState, useEffect } from "react";
const Signup = () => {
  return (
    <>
      <form method="post" action="http://localhost:3000/signup">
        <input
          type="text"
          name="username"
          pattern="^[A-Za-z\s]+$"
          placeholder="name"
          required
        >
          name 100 email 255 unique
          name
        </input>
        <input
          type="email"
          name="useremail"
          placeholder="email@example.com"
          required
        >
          email
        </input>
        <input type="password" placeholder="password" name="userpassword" pattern="" required></input>
      </form>
      {/* already signed up? login home */}
    </>
  );
};
export default Signup;
