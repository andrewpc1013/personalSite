import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home } from "./pages";
import "@fontsource/poppins";

function App() {
  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
