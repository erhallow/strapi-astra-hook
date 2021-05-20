//This is the main javascript which will help you 
//execute get/post/put/delete queries to Astra Cassandra database


const request = require('request');

module.exports = strapi => {
		return {
			async initialize() {
				const {
					token,
					databaseId,
					databaseRegion,
					astraKeyspace,
				} = strapi.config.get('hook.settings.astra');

				var headers = {
								'X-Cassandra-Token': token,
								'Content-Type': 'application/json'
					};

				var url_ini = 'https://' + databaseId+ '-' +databaseRegion+'.apps.astra.datastax.com/api/rest/v2/namespaces/' +astraKeyspace + '/collections/';

				strapi.services.astra = {

					//creating the document
					create: async () => {

						//This is the sample document data 
						var dataString = '{ "name": "John", "last_name": "Doe" }';

						//This is the sample collection name
						var collection_name = 'employee_detail';

						var options = {
								url: url_ini + collection_name,
								method: 'POST',
								headers: headers,
								body: dataString
						};

						request(options, function(err, res, body) {
										document_id = JSON.parse(body);
										console.log(document_id);
									});
					},


					//Getting the document data using document id
					getById: async () => {

						var collection_name = 'employee_detail';

						//This is the sample document id
						var document_id = 'ce7f5f87-225e-41f2-8816-77b4df8d61d1';

						var options = {
								url: url_ini + collection_name + '/' + document_id ,
								method: 'GET',
								headers: headers,
						};
						request(options, function(err, res, body) {
										let json = JSON.parse(body);
										console.log(json);
									});
						},


					
					//Getting the document via document path and returns the most recent entry of data in that specific document
					getByPath: async () => {

						var collection_name = 'employee_detail';

						var options = {
								url: url_ini + collection_name,
								method: 'GET',
								headers: headers,
						};

						request(options, function(err, res, body) {
										let json = JSON.parse(body);
										console.log(json);
									});
						},


					//searching the document via document name
					searchCollection: async () => {

							var collection_name = 'employee_detail';
							// This is the sample query for our document
							var query = {
													"name": { "$eq": "John" }
									}

						var options = {
								url: url_ini+collection_name+'?where='+JSON.stringify(query)+'&page-size=3',
								method: 'GET',
								headers: headers,
						};

						request(options, function(err, res, body) {
										let json = JSON.parse(body);
										console.log(json);
									});
						},

				}
			},
		};
	};
