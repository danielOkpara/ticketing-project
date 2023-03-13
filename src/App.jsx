import { Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import ProfileSetUp from "./pages/ProfileSetUp";
import Login from "./pages/Login";
import VerifyPhone from "./pages/VerifyPhone";
import Pinsetup from "./pages/Pinsetup"
import Pinconfirm from "./pages/Pinconfirm";
import Fileupload from "./pages/Fileupload";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile-create" element={<ProfileSetUp/>}/>
      <Route path="/verify-phone" element={<VerifyPhone/>}/>
      <Route path="/pin" element={<Pinsetup />} />
      <Route path="/confirm-pin" element={<Pinconfirm />} />
      <Route path="/upload-file" element={<Fileupload/>} />
    </Routes>
  );
}

export default App;
