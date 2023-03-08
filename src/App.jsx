import { Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import ProfileSetUp from "./pages/ProfileSetUp";
import Login from "./pages/Login";
import VerifyPhone from "./pages/VerifyPhone";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile-create" element={<ProfileSetUp/>}/>
      <Route path="/verify-phone" element={<VerifyPhone/>}/>
    </Routes>
  );
}

export default App;
