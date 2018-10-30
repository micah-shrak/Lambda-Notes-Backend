// middleware
// bcyrptjs
// db

module.exports = (server) => {
	server.get('/', sanityCheck);
	server.post('/api/register', register);
	server.post('/api/login', login);
	server.get('/api/users', listUsers);
	server.get('/api/notes', listNotes);
	server.get('/api/notes/:id', userNotes);
	server.post('/api/notes', createNotes);
	server.put('/api/note/:id', editNotes);
	server.delete('/api/note/:id', deleteNotes);
};

// Sanity Check
function sanityCheck(req, res) {
	res.send('Is this thing on???');
}

// REGISTER
function register(req, res) {}

// LOGIN
function login(req, res) {}
// LIST ALL USERS
function listUsers(req, res) {}

// LIST ALL NOTES
function listNotes(req, res) {}

// LIST NOTES BY USER ID
function userNotes(req, res) {}

// CREATE NOTES
function createNotes(req, res) {}

// EDIT NOTES
function editNotes(req, res) {}

// DELETE NOTES
function deleteNotes(req, res) {}
