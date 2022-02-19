const getUserBalance = state => state.auth.user.balance;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;
const getUserAvatar = state => state.auth.user.avatarURL;
const getIsRefreshingUser = state => state.auth.isRefreshingCurrentUser;
const getIsRefreshingBalance = state => state.auth.isRefreshingBalance;
const getIsAuthenticated = state => state.auth.isAuthenticated;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getUserBalance,
  getIsRefreshingUser,
  getIsRefreshingBalance,
  getUserAvatar,
  getIsAuthenticated,
};

export default authSelectors;
