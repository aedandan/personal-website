import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';


function App() {
  return(
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path="/"/>
        <Route path="/about"/>
        <Route path="/projects"/>
      </Routes>
    </div>
  );
}

export default App;
