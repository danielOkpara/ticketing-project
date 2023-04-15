import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Pinsetup from "./pages/Pinsetup"
import Pinconfirm from "./pages/Pinconfirm";
import Fileupload from "./pages/Fileupload";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verify-email" element={<VerifyEmail/>}/>
      <Route path="/pin" element={<Pinsetup />} />
      <Route path="/confirm-pin" element={<Pinconfirm />} />
      <Route path="/upload-file" element={<Fileupload/>} />
    </Routes>
  );
}

export default App;
