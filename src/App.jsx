import { AppBar } from './components'
import { Routes, Route } from 'react-router-dom';
import { PageWrapper, Login, HomePage } from './components'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login /> }/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
