// Display Forgot Password page
const ForgotPassword = (req, res) => {
	res.render('auth/forgot-password');
};

// Display Forgot Password page
const Login = (req, res) => {
	res.render('auth/login');
};

// Display Signup page
const Signup = (req, res) => {
	res.render('auth/signup');
};

// Make functions global
module.exports = { 
	ForgotPassword, 
	Login,
	Signup
};
