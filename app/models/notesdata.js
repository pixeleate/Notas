

exports.definition = {
	config: {
		columns: {
		    "date": "text",
		    "title": "text",
		    "content": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "notesdata",
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};