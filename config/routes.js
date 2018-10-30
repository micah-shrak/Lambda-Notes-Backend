// axios
//const axios = require('axios');

// middleware

// bcyrptjs

// db
const db = require('../database/dbConfig.js');

module.exports = (server) => {
	server.get('/', sanityCheck);
	server.get('/api/notes', listNotes);
	server.post('/api/notes', createNotes);
	server.put('/api/notes/:id', editNotes);
	server.delete('/api/notes/:id', deleteNotes);
};

// Sanity Check
function sanityCheck(req, res) {
	res.send('Is this thing on???');
}

// LIST ALL NOTES
function listNotes(req, res) {
	db('notes')
		.then((note) => {
			res.status(200).json(note);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
}

// CREATE NOTES
function createNotes(req, res) {
	const note = req.body;
	db.insert(note)
		.into('notes')
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
}

// EDIT NOTES
function editNotes(req, res) {
	const { id } = req.params;
	const changes = req.body;
	db('notes')
		.where({ id })
		.update(changes)
		.then((change) => {
			res.status(200).json(change);
		})
		.catch((err) => res.status(500).json(err));
}

// DELETE NOTES
function deleteNotes(req, res) {
	const { id } = req.params;
	db('notes')
		.where({ id })
		.del()
		.then((count) => {
			res.status(200).json(count);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
}

// REGISTER
function register(req, res) {}

// LOGIN
function login(req, res) {}
// LIST ALL USERS
function listUsers(req, res) {}

// LIST NOTES BY USER ID
function userNotes(req, res) {}
