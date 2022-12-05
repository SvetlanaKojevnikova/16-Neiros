import Home from "./Pages/Home";
import Footer from "./Lyout/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Lyout/Header/MainLayuot";
import Tarrifs from "./Lyout/Header/Tarrifs";
import Solution from "./Lyout/Header/Solutions";
import Solutions from "./Lyout/Header/Solutions";
import Contacts from "./Lyout/Header/Contacts";
import Register from "./Lyout/Header/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="solution" element={<Solution />} />
            <Route path="Tarrifs" element={<Tarrifs />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
