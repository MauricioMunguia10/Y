import { IoMdEye } from "react-icons/io";
import styles from "./InputLanding.module.css";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";

const InputLanding = ({ type, placeholder, value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.inputWrapper}>
      {type === "password" ? (
        <>
          <input
            className={styles.input}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          />
          {showPassword ? (
            <FaEyeSlash
              className={styles.eyeIcon}
              size={28}
              onClick={handleClick}
            />
          ) : (
            <IoMdEye
              className={styles.eyeIcon}
              size={28}
              onClick={handleClick}
            />
          )}
        </>
      ) : (
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </div>
  );
};

export default InputLanding;
