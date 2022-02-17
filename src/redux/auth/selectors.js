const getUserBalance = state => state.auth.user.balance;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;
const getUserAvatar = state => state.auth.user.avatarURL;
const getIsRefreshingCurrentUser = state => state.auth.isRefresh;
const getIsAuthenticated = state => state.auth.isAuthenticated;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getUserName,
  getUserBalance,
  getIsRefreshingCurrentUser,
  getUserAvatar,
  getIsAuthenticated,
};

export default authSelectors;
