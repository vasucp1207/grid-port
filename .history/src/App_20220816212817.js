import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/about" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
