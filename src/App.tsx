import react from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import FarmerHomePage from "./pages/FarmerHomePage";
import MillersHomePage from "./pages/MillersHomePage";
import WholeSellerHomePage from "./pages/WholeSellerHomePage";
import UserProfile from "./pages/UserProfile";
import { UserProvider } from "./components/UserContext";
function App() {
  return (
    <div className="flex flex-col">
      <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/farmer/homepage" element={<FarmerHomePage />} />
        <Route path="/miller/homepage" element={<MillersHomePage />} />
        <Route path="/middleman/homepage" element={<WholeSellerHomePage />} />
        <Route path="/middleman/homepage" element={<WholeSellerHomePage />} />
        <Route path="/userprofile" element={<UserProfile />} />  
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
