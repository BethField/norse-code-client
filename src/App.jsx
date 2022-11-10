import { AppBar } from './components'
import { Routes, Route } from 'react-router-dom';
import { PageWrapper } from './components'
import { Home } from './pages'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
