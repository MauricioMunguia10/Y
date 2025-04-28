import { toast } from "react-toastify";

export const sendNotification = (msg, type) => {
  if (type === "success") {
    toast.success(msg, {
      toastStyle: { backgroundColor: "green", color: "white" },
    });
  } else if (type === "error") {
    toast.error(msg, {
      toastStyle: { backgroundColor: "red", color: "white" },
    });
  }
};
