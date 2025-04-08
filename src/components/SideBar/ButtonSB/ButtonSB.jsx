import clsx from "clsx";
import styles from "./ButtonSB.module.css";
import { useNavigate } from "react-router-dom";

const ButtonSB = ({ icon, text, path, active }) => {
  const navigate = useNavigate();
  const handleChangePath = (path) => {
    navigate(path);
  };
  return (
    <div className={styles.container} onClick={() => handleChangePath(path)}>
      <button
        className={clsx(styles.button, {
          [styles.color]: active,
        })}
      >
        <span className={styles.icon}>{icon}</span>
        <span className={styles.text}>{text}</span>
      </button>
    </div>
  );
};

export default ButtonSB;
