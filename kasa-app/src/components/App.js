import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Page404 from "./Page404";
import About from "./About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
