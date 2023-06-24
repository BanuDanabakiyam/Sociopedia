import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "scenes/loginPage/loginPage";
import HomePage from "scenes/homePage/homePage";
import ProfilePage from "scenes/profilePage/profilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="homepage" element={<HomePage/>} />
        <Route path="/profilePage/:userId" element={<ProfilePage/>} />
      </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
