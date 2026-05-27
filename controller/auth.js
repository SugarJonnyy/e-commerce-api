const register = async (req, res) => {
  res.send("register here");
};
const login = async (req, res) => {
  res.send("loging in");
};
const logout = async (req, res) => {
  res.send("logging out");
};

module.exports = {
  register,
  login,
  logout,
};
