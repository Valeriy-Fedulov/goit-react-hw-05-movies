import "./App.css";

import { Navigation } from "./components/navigation";
import { Trending } from "./components/trending";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route pach="/" exact element={<Navigation />}></Route>
      <Route pach="trending" element={<Trending />}></Route>
    </Routes>
  );
}

export default App;
