import "./App.css";

import { Navigation } from "./components/navigation";
import { Trending } from "./components/trending";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Trending />
    </div>
  );
}

export default App;
