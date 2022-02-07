import { Routes, Route } from 'react-router';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ReportPage from './pages/ReportPage/ReportPage';
import Modal from './components/Modal/Modal';
import BalancePage from './pages/BalancePage/BalancePage';
import OutcomesPage from './pages/OutcomesPage/OutcomesPage';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/balance:outcomes" element={<OutcomesPage />} />
        {/* <Route path="/balance:intcomes" element={<IncomesPage />} /> */}
        <Route path="/report" element={<ReportPage />} />
      </Routes>
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      {/* <button type="button" onClick={() => setModalActive(true)}>Open modal</button> */}
    </div>
  );
}

export default App;
