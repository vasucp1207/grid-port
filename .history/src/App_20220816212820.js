import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
