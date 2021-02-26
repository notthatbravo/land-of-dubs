// Display Main page
const index = (req, res) => {
	res.render('news/index');
};

// Make function global
module.exports = { index };
