const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsLoading = state => state.auth.isLoading;

const getIsErrorLogIn = state => state.auth.isErrorLogIn;

const getIsErrorSignUp = state => state.auth.isErrorSignUp;

const getToken = state => state.auth.token;

const getBalance = state => state.auth.balance;

const authSelector = {
  getIsLoggedIn,
  getUserName,
  getIsLoading,
  getIsErrorSignUp,
  getIsErrorLogIn,
  getToken,
  getBalance,
};

export default authSelector;
