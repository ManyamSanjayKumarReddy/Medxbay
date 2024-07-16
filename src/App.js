import './App.css';
import Section from './components/section/section';

//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { useEffect } from 'react';

//import react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  useEffect(() => {
    document.title = "MedxBay";
}, []);

  return (
   
    <Router>
      <Routes>
        <Route path="/" element={ <Section/>}/>
      </Routes>
    </Router>
  );
}

export default App;