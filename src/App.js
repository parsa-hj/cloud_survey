import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CostReport from './pages/CostReport';
import SurveyPage from './pages/SurveyPage';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className='App'>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cost-report" element={<CostReport />} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/about" element={<About />} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;
