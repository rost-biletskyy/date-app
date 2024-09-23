import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Mood from "./pages/Mood";
import NoPage from "./pages/NoPage";
import Chess from "./pages/Chess";
import Map from "./pages/Map";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="mood" element={<Mood />} />
        <Route path="chess" element={<Chess />} />
        <Route path="map" element={<Map />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
