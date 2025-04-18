import { FcGoogle } from "react-icons/fc";
import LandingButton from "../../components/LandingButton/LandingButton";
import styles from "./Landing.module.css";
import { FaGithub } from "react-icons/fa";

const Landing = () => {
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
          <LandingButton text="Log in !" type={1} />
          <LandingButton text="Sign up !!" type={2} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
