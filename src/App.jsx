import { AppBar } from './components'
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components';
import { BrowseGamesPage } from "./pages"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route path="/games" element={<BrowseGamesPage />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
