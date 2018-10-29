// middleware
// bcyrptjs
// db

module.exports = (server) => {
	server.get('/', sanityCheck);
};

// Sanity Check
function sanityCheck(req, res) {
	res.send('Is this thing on???');
}
