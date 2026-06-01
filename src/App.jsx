import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Donate from './pages/Donate'
import Receive from './pages/Receive'
import CollectionPoints from './pages/CollectionPoints'
import Inventory from './pages/Inventory'
import About from './pages/About'
import Feedback from './pages/Feedback'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doar" element={<Donate />} />
          <Route path="/receber" element={<Receive />} />
          <Route path="/pontos-coleta" element={<CollectionPoints />} />
          <Route path="/inventario" element={<Inventory />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
