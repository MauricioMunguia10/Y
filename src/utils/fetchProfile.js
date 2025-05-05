import API from "../api/axios";
import { sendNotification } from "./toastNotifications";

export const fetchProfile = async () => {
  try {
    const res = await API.get("/me");
    return res.data;
  } catch (err) {
    console.error("Error fetching profile:", err.response?.data?.message);
    sendNotification("An error occurred", "error");
    localStorage.removeItem("token");
    return 0;
  }
};
