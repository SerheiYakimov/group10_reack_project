import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/operations';
import authSelectors from './redux/auth/selectors';
// import { Oval } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ReportPage from './pages/ReportPage/ReportPage';
import Modal from './components/Modal/Modal';
import BalancePage from './pages/BalancePage/BalancePage';
import EmailVerPage from './pages/EmailVerPage/EmailVerPage';
import GoogleVerPage from './pages/GoogleVerPage/GoogleVerPage';
import DevelopersView from './pages/DevelopersView';
import { Loader } from './components/Loader/Loader';
import TransactionSelectors from './redux/transactions/selectors';
import { getAllUserTransactions } from './redux/transactions/operations';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  const isUserRefreshing = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    dispatch(getAllUserTransactions());
  }, [dispatch]);

  return (
    <>
      {isUserRefreshing ? (
        <Loader />
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
              path="/developers"
              element={
                <PublicRoute
                  isAuth={isAuth}
                  component={DevelopersView}
                  restricted
                />
              }
            />

            <Route
              path="/google-redirect"
              element={
                <PublicRoute
                  isAuth={isAuth}
                  component={GoogleVerPage}
                  restricted
                />
              }
            />
            <Route
              path="/verify-redirect"
              element={<PublicRoute isAuth={isAuth} component={EmailVerPage} />}
            />
            <Route
              path="/balance"
              element={<PrivateRoute isAuth={isAuth} component={BalancePage} />}
            />
            <Route
              path="/reports"
              element={<PrivateRoute isAuth={isAuth} component={ReportPage} />}
            />

            {/* <Route path="/reports" element={<ReportPage />} /> */}
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
//   <Route path="/balance/:outcomes" exact element={<TransactionsTable />} />
//   <Route path="/report" element={<ReportPage />} />
// </Routes>;
