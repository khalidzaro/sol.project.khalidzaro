import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Haptic from './pages/Haptic'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/haptic" element={<Haptic />} />
    </Routes>
  )
}

export default App