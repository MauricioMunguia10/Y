import styles from "./InputLanding.module.css";

const InputLanding = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default InputLanding;
