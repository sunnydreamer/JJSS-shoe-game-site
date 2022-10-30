import React from "react";
import SignUpForm from "../Components/SignUpForm";
import LoginForm from "../Components/LoginForm";
import "./../style.css";

function SignupPage({ setUser }) {
  return (
    <div className="PageContainer">
      <br />
      <br />
      <a href="/login" className="button">
        ALready a User? Login
      </a>
      <SignUpForm setUser={setUser} />
    </div>
  );
}

export default SignupPage;
