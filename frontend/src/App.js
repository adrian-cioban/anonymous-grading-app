import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import AdaugaNote from "./components/AdaugaNote/AdaugaNote";
import Livrabile from "./components/Livrabile/Livrabile";
import Students from "./components/Students/Students";
import AllGrades from "./components/AllGrades/AllGrades";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/homepage" element={<Homepage></Homepage>}></Route>
        <Route path="/AdaugaNote" element={<AdaugaNote></AdaugaNote>}></Route>
        <Route
          path="/LivrabilePartiale"
          element={<Livrabile></Livrabile>}
        ></Route>
        <Route path="/students" element={<Students></Students>}></Route>
        <Route
          path="/allGrades/:proiectId"
          element={<AllGrades></AllGrades>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
