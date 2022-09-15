import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';


function App() {
  return(
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage staticMode={true} />} />
      </Routes>
    </div>
  );
}

export default App;
