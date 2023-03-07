import { Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>
  );
}

export default App;
