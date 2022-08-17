import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutMe />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
