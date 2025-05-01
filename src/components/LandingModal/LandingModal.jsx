import InputLanding from "./Input/InputLanding";
import LandingButton from "../LandingButton/LandingButton";
import styles from "./LandingModal.module.css";
import { useState } from "react";
import { loginUser, registerUser } from "../../api/auth";
import { sendNotification } from "../../utils/toastNotifications";
import { useNavigate } from "react-router-dom";

const LandingModal = ({ type }) => {
  //1 for signup, 2 for login
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(type);
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleRegister = async () => {
    if (!validateData()) return;
    try {
      const data = await registerUser(registerData);
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      sendNotification(data.message, "success");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
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

  const handleOnChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnChangeLogIn = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value.trim() }));
  };
  const handleSignin = async () => {
    if (!validateLoginData()) return;
    try {
      const data = await loginUser(loginData);
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      sendNotification(data.message, "success");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch (err) {
      sendNotification(err.message, "error");
    }
  };
  const validateLoginData = () => {
    if (!loginData.email && !loginData.username) {
      sendNotification("Email or username is required", "error");
      return false;
    }
    if (!loginData.password) {
      sendNotification("Password is required", "error");
      return false;
    }
    return true;
  };

  return (
    <div className={styles.container}>
      {modalType === 1 ? (
        <>
          <p className={styles.title}>Sign up</p>
          <InputLanding
            placeholder={"Name"}
            onChange={handleOnChangeRegister}
            name={"name"}
            type={"text"}
          />
          <InputLanding
            placeholder={"Last Name"}
            onChange={handleOnChangeRegister}
            name={"lastName"}
            type={"text"}
          />
          <InputLanding
            placeholder={"Username"}
            onChange={handleOnChangeRegister}
            name={"username"}
            type={"text"}
          />
          <InputLanding
            placeholder={"Email address"}
            onChange={handleOnChangeRegister}
            name={"email"}
            type={"text"}
          />
          <InputLanding
            placeholder={"Password"}
            onChange={handleOnChangeRegister}
            name={"password"}
            type={"password"}
          />
          <InputLanding
            placeholder={"Confirm your password"}
            onChange={handleOnChangeRegister}
            name={"confirmPassword"}
            type={"password"}
          />
          <LandingButton text={"Register"} type={2} onClick={handleRegister} />
          <p className={styles.helpMessage} onClick={() => setModalType(2)}>
            Already have an account? Log In
          </p>
        </>
      ) : (
        <>
          <p className={styles.title}>Log in</p>
          <InputLanding
            placeholder={"Email address"}
            onChange={handleOnChangeLogIn}
            name={"email"}
            type={"text"}
          />
          <div className={styles.divider}>
            <span>O</span>
          </div>

          <InputLanding
            placeholder={"Username"}
            onChange={handleOnChangeLogIn}
            name={"username"}
            type={"text"}
          />
          <InputLanding
            placeholder={"Password"}
            onChange={handleOnChangeLogIn}
            name={"password"}
            type={"password"}
          />
          <LandingButton text={"Log In"} type={2} onClick={handleSignin} />
          <p className={styles.helpMessage} onClick={() => setModalType(1)}>
            Don't have an account? Sign Up
          </p>
        </>
      )}
    </div>
  );
};

export default LandingModal;
