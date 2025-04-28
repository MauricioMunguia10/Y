import { Bounce, ToastContainer } from "react-toastify";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
