import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./routes/about";

const rootElement = document.getElementById("demo");

render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
    </Routes>
  </HashRouter>,
  rootElement
);
