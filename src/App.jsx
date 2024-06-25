import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";


function App() {
  return (
    <Routes>
      <Route path={import.meta.env.BASE_URL} element={<Profile />} />
    </Routes>
  );
}

export default App;
