import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/operations';
import authSelectors from './redux/auth/selectors';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ReportPage from './pages/ReportPage/ReportPage';
import Modal from './components/Modal/Modal';
import BalancePage from './pages/BalancePage/BalancePage';
import OutcomesPage from './pages/OutcomesPage/OutcomesPage';
import IncomesPage from './pages/IncomesPage/IncomesPage';
import EmailVerPage from './pages/EmailVerPage/EmailVerPage';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  const isUserRefreshing = useSelector(
    authSelectors.getIsRefreshingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isUserRefreshing ? (
        <h1>Спинер</h1>
      ) : (
        <div className="App" id="scrollbar">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PublicRoute isAuth={isAuth} component={HomePage} restricted />
              }
            />
            <Route
              path="/google-redirect"
              element={
                <PublicRoute
                  isAuth={isAuth}
                  component={BalancePage}
                  restricted
                />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  isAuth={isAuth}
                  component={EmailVerPage}
                  restricted
                />
              }
            />
            <Route
              path="/balance"
              element={<PrivateRoute isAuth={isAuth} component={BalancePage} />}
            />
            <Route
              path="/balance:outcomes"
              exact
              element={
                <PrivateRoute isAuth={isAuth} component={OutcomesPage} />
              }
            />
            <Route
              path="/balance:incomes"
              exact
              element={<PrivateRoute isAuth={isAuth} component={IncomesPage} />}
            />
            <Route
              path="/reports"
              element={<PrivateRoute isAuth={isAuth} component={ReportPage} />}
            />
          </Routes>
          <Modal active={modalActive} setActive={setModalActive}></Modal>
          {/* <button type="button" onClick={() => setModalActive(true)}>
        Open modal
      </button> */}
          <Toaster position="top-right" />
        </div>
      )}
    </>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<HomePage />} />
//   <Route path="/balance" element={<BalancePage />} />

//   {/* <Route path="/balance/:incomes" exact element={<IncomesPage />} /> */}
//   <Route path="/balance/:outcomes" exact element={<OutcomesPage />} />
//   <Route path="/report" element={<ReportPage />} />
// </Routes>;
