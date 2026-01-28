import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/vitrine/teams/homePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      {/* <Route path="*" element={<NotFound />} /> */}


      
    </Routes>
  )
}

export default App
