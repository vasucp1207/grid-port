import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div></div>
      <Routes>
        <Route exact path="/about" element={<AboutMe />} />
      </Routes>
  );
}

export default App;
