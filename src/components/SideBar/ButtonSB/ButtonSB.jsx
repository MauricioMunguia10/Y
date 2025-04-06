import styles from "./ButtonSB.module.css";

const ButtonSB = ({ icon, text, path, enable}) => {
  return (
    <div
      className={styles.container}
      onClick={() => console.log(path)}
      enable={enable}
    >
      <button className={styles.button}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.text}>{text}</span>
      </button>
    </div>
  );
};

export default ButtonSB;
