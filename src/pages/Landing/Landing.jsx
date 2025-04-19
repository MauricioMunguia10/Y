import { FcGoogle } from "react-icons/fc";
import LandingButton from "../../components/LandingButton/LandingButton";
import styles from "./Landing.module.css";
import { FaGithub } from "react-icons/fa";
import LandingModal from "../../components/LandingModal/LandingModal";
import { useEffect, useState } from "react";

const Landing = () => {
  const [showModalLogIn, setShowModalLogin] = useState(false);
  const [showModalSignup, setShowModalSignup] = useState(false);
  const handleModalLogin = () => {
    setShowModalLogin(!showModalLogIn);
  };
  const handleModalSignup = () => {
    setShowModalSignup(!showModalSignup);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModalLogin(false);
        setShowModalSignup(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/whiteLogo.png" alt="logo Y" />
      </div>
      <div className={styles.right}>
        <div className={styles.options}>
          <p className={styles.title}>Post your story</p>
          <LandingButton
            text="Google - Not Available Yet"
            icon={<FcGoogle />}
            type={1}
          />
          <LandingButton
            text="GitHub - Not Available Yet"
            icon={<FaGithub />}
            type={1}
          />
          <LandingButton text="Log in !" type={1} onClick={handleModalLogin} />
          <LandingButton
            text="Sign up !!"
            type={2}
            onClick={handleModalSignup}
          />
        </div>
      </div>
      {showModalSignup && (
        <div className={styles.modal} onClick={handleModalSignup}>
          <div onClick={(e) => e.stopPropagation()}>
            <LandingModal type={1} />
          </div>
        </div>
      )}
      {showModalLogIn && (
        <div className={styles.modal} onClick={handleModalLogin}>
          <div onClick={(e) => e.stopPropagation()}>
            <LandingModal type={2} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
