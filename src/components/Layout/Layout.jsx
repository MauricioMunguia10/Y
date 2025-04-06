import styles from "./layout.module.css";
import SideBar from "../SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SideBar />
      </div>
      <div className={styles.center}>
        <div>{children}</div>
      </div>
      <div className={styles.right}> </div>
    </div>
  );
};

export default Layout;
