import { AppBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./components";
import { TimelinePage, Home, BrowseGamesPage, TTTAncientGreecePage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />}/>
          <Route path="/games" element={<BrowseGamesPage />} />
          <Route path="/games/timeline" element={<TimelinePage />} />
          <Route path="/games/TTTAncientGreece" element={<TTTAncientGreecePage />} />
          {/* <Route path="login" element={<Login /> }/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
