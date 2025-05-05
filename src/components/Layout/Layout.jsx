import styles from "./layout.module.css";
import SideBar from "../SideBar/SideBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProfile } from "../../utils/fetchProfile";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (fetchProfile() === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SideBar />
      </div>
      <div className={styles.center}>
        <div className={styles.children}>{children}</div>
      </div>
      <div className={styles.right}> </div>
    </div>
  );
};

export default Layout;
