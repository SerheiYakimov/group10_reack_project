import { Routes, Route } from 'react-router';
import Header from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { TransactionsPage } from './pages/TransactionsPage/TransactionsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
