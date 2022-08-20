import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Header from "./components/Header";
import RequiredAuth from "./components/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/about"
          element={
            <RequiredAuth>
              <About />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
