import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Quests from "./pages/quests";
import Profile from "./pages/profile";
import NoPage from "./pages/no-page";
import Games from "./pages/games"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Welcome />} />
          <Route path="Quests" element={<Quests />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="games" element={<Games />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}