import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;