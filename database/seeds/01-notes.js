exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('notes')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('notes').insert([
				{ title: 'My New Note', content: 'This is the content' },
				{ title: 'A New Note', content: 'this is the content of the note' },
				{ title: 'The New Note', content: 'this is more content' },
			]);
		});
};
