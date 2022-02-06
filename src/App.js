import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import ReportPage from './pages/ReportPage/ReportPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/report" element={<ReportPage />} />
      </Routes>
    </div>
  );
}

export default App;
