import InputLanding from "./Input/InputLanding";
import LandingButton from "../LandingButton/LandingButton";
import styles from "./LandingModal.module.css";

const LandingModal = ({ type }) => {
  //1 for signup, 2 for login
  return (
    <div className={styles.container}>
      {type === 1 ? (
        <>
          <p className={styles.title}>Sign up</p>
          <InputLanding placeholder={"Name"} />
          <InputLanding placeholder={"Username"} />
          <InputLanding placeholder={"Email address"} />
          <InputLanding placeholder={"Password"} />
          <InputLanding placeholder={"Confirm your password"} />
          <LandingButton text={"Register"} type={2} />
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
