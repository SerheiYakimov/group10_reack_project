import { Routes, Route } from 'react-router';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import Modal from './components/Modal/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Modal active={modalActive} setActive={setModalActive}>
        <p></p>
      </Modal>
      {/* Для проверки модалки */}
      {/* <button type='button' onClick={() => setModalActive(true)}></button> */}
    </div>
  );
}

export default App;
