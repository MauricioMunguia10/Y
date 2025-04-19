import clsx from "clsx";
import styles from "./LandingButton.module.css";
const LandingButton = ({ text, icon, type, onClick }) => {
  return (
    <div
      className={clsx(styles.container, {
        [styles.primary]: type === 1,
        [styles.secondary]: type === 2,
      })}
      onClick={onClick}
    >
      {text}
      {icon}
    </div>
  );
};

export default LandingButton;
