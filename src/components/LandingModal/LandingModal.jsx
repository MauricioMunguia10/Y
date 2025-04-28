import InputLanding from "./Input/InputLanding";
import LandingButton from "../LandingButton/LandingButton";
import styles from "./LandingModal.module.css";
import { useState } from "react";
import { registerUser } from "../../api/auth";
import { sendNotification } from "../../utils/toastNotifications";

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
      sendNotification(data.message, "success");
    } catch (err) {
      sendNotification(err.message, "error");
    }
  };
  const validateData = () => {
    const fields = [
      {
        key: "name",
        message: "Name is required",
        format: (value) => value.trim(),
      },
      {
        key: "lastName",
        message: "Last Name is required",
        format: (value) => value.trim().toLowerCase(),
      },
      {
        key: "username",
        message: "Username is required",
        format: (value) => value.trim(),
      },
      {
        key: "email",
        message: "Email is required",
        format: (value) => value.trim(),
      },
      {
        key: "password",
        message: "Password is required",
        format: (value) => value.trim(),
      },
      {
        key: "confirmPassword",
        message: "Confirm Password is required",
        format: (value) => value.trim(),
      },
    ];

    for (const field of fields) {
      if (!registerData[field.key]) {
        sendNotification(field.message, "error");
        return false;
      }

      if (field.format) {
        registerData[field.key] = field.format(registerData[field.key]);
      }
    }

    if (registerData.password !== registerData.confirmPassword) {
      sendNotification("Passwords do not match", "error");
      return false;
    }
    if (!registerData.email || !validateEmail(registerData.email)) {
      sendNotification("Invalid email format", "error");
      return false;
    }

    return true;
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
