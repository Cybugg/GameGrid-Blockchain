import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Quests from "./pages/quests";
import Profile from "./pages/profile";
import NoPage from "./pages/no-page";
import Games from "./pages/games"
import Character from "./pages/character";
import GridRivalsHome from "./pages/GridRivals/page";
import GridRivalsTraining from "./pages/GridRivals/Training/page";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Welcome />} />
          <Route path="quests" element={<Quests />} />
          <Route path="quests/create-hero" element={<Character />} />
          <Route path="profile" element={<Profile />} />
          <Route path="games" element={<Games />} />
          <Route path="*" element={<NoPage />} />
          <Route path="games/grid-rivals/play" element={<GridRivalsHome />} />
          <Route path="games/grid-rivals/training" element={<GridRivalsTraining />} />
      </Routes>
    </BrowserRouter>
  );
}