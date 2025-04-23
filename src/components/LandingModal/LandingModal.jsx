import InputLanding from "./Input/InputLanding";
import LandingButton from "../LandingButton/LandingButton";
import styles from "./LandingModal.module.css";
import { useState } from "react";
import { registerUser } from "../../api/auth";

const LandingModal = ({ type }) => {
  //1 for signup, 2 for login
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = async () => {
    if (!validateData()) return;
    try {
      const data = await registerUser(registerData);
      console.log("Usuario registrado:", data);
    } catch (err) {
      console.error("Error:", err.message);
    }
  };
  const validateData = () => {
    if (!registerData.name) {
      alert("Name is required");
      return false;
    }
    if (!registerData.lastName) {
      alert("Last Name is required");
      return false;
    }
    if (!registerData.username) {
      alert("Username is required");
      return false;
    }
    if (!registerData.email) {
      alert("Email is required");
      return false;
    }
    if (!registerData.password) {
      alert("Password is required");
      return false;
    }
    if (!registerData.confirmPassword) {
      alert("Confirm Password is required");
      return false;
    }
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      {type === 1 ? (
        <>
          <p className={styles.title}>Sign up</p>
          <InputLanding
            placeholder={"Name"}
            onChange={handleOnChange}
            name={"name"}
          />
          <InputLanding
            placeholder={"Last Name"}
            onChange={handleOnChange}
            name={"lastName"}
          />
          <InputLanding
            placeholder={"Username"}
            onChange={handleOnChange}
            name={"username"}
          />
          <InputLanding
            placeholder={"Email address"}
            onChange={handleOnChange}
            name={"email"}
          />
          <InputLanding
            placeholder={"Password"}
            onChange={handleOnChange}
            name={"password"}
          />
          <InputLanding
            placeholder={"Confirm your password"}
            onChange={handleOnChange}
            name={"confirmPassword"}
          />
          <LandingButton text={"Register"} type={2} onClick={handleRegister} />
          <p>Already have an account? Log In</p>
        </>
      ) : (
        <>
          <p className={styles.title}>Log in</p>
          <InputLanding placeholder={"Email address"} />
          <InputLanding placeholder={"Username"} />
          <InputLanding placeholder={"Password"} />
          <LandingButton text={"Log In"} type={2} />
          <p>Don't have an account? Sign Up</p>
        </>
      )}
    </div>
  );
};

export default LandingModal;
