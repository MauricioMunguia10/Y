import styles from "./layout.module.css";
import SideBar from "../SideBar/SideBar";
import API from "../../api/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { sendNotification } from "../../utils/toastNotifications";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    try {
      const res = await API.get("/me");
      console.log("Profile data:", res.data);
    } catch (err) {
      console.error("Error fetching profile:", err.response?.data?.message);
      sendNotification("An error occurred", "error");
      setTimeout(() => {
        navigate("/");
      }, 1000);
      localStorage.removeItem("token");
    }
  };
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
