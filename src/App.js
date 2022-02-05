import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
