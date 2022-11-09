import { AppBar } from './components'
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
