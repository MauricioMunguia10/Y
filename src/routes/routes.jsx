import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Jobs from "../pages/Jobs/Jobs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
};

export default AppRoutes;
