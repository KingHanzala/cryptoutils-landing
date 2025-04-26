import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';

function App() {

  return (
    <Router>
        <Header/>
      <main className="main-content bg-transparent">
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </main>
      <Footer/>
    </Router>
  )
}

export default App
