import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StudentDetailsPage from "./pages/StudentDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";


function App() {

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <div className="pages">
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students/:studentsID" element={<StudentDetailsPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
