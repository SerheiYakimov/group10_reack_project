import { Routes, Route } from 'react-router';
import { useState, useEffect, lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/operations';
import authSelectors from './redux/auth/selectors';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import { Loader } from './components/Loader/Loader';
import { getAllUserTransactions } from './redux/transactions/operations';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ReportPage = lazy(() => import('./pages/ReportPage/ReportPage'));
const BalancePage = lazy(() => import('./pages/BalancePage/BalancePage'));
const EmailVerPage = lazy(() => import('./pages/EmailVerPage/EmailVerPage'));
const GoogleVerPage = lazy(() => import('./pages/GoogleVerPage/GoogleVerPage'));
const DevelopersView = lazy(() =>
  import('./pages/DevelopersView/DevelopersView'),
);

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
    !isUserRefreshing && (
      <div className="App" id="scrollbar">
        <Header />
        <Suspense fallback={<Loader />}>
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
        </Suspense>
        <Modal active={modalActive} setActive={setModalActive}></Modal>
        {/* <button type="button" onClick={() => setModalActive(true)}>
        Open modal
      </button> */}
        <Toaster position="top-right" />
      </div>
    )
  );
}

export default App;
