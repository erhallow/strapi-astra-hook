
const request = require('request');
var document_id = '';




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

        strapi.services.astra = {

           //check function 
          hello: () => {
            console.log('Hello world...');
          },


          //creating the document

          create: async (collection, document) => {
            // TODO: Eric TODO


            var dataString = '{ "title": "check_2", "other": "check_2" }';

            var options = {
                url: 'https://' + databaseId+ '-' +databaseRegion+'.apps.astra.datastax.com/api/rest/v2/namespaces/' +astraKeyspace + '/collections/check_2',
                method: 'POST',
                headers: headers,
                body: dataString
            };

            request(options, function(err, res, body) {
                    document_id = JSON.parse(body);
                    console.log(document_id);
                  });
          },


          //getting the document via document id
          getById: async (collection, id) => {

           // TODO: Eric TODO
            // var headers = {
            //     'X-Cassandra-Token': token,
            //     'Content-Type': 'application/json'
            // };

            //var dataString = '{ "title": "Some Stuff", "other": "This is nonsensical stuff." }';

            var options = {
                url: 'https://' + databaseId+ '-' +databaseRegion+'.apps.astra.datastax.com/api/rest/v2/namespaces/' +astraKeyspace + '/collections/check_2/' +document_id,
                method: 'GET',
                headers: headers,
            };
           // console.log(document_id + 'Hi');
            request(options, function(err, res, body) {
                    let json = JSON.parse(body);
                    console.log("Hi from getById");
                    console.log(json);
                  });
            },


          
          //getting the document via document path
          getByPath: async (collection, path) => {

            // var headers = {
            //     'X-Cassandra-Token': token,
            //     'Content-Type': 'application/json'
            // };

            //var dataString = '{ "title": "Some Stuff", "other": "This is nonsensical stuff." }';

            var options = {
                url: 'https://' + databaseId+ '-' +databaseRegion+'.apps.astra.datastax.com/api/rest/v2/namespaces/' +astraKeyspace + '/collections/check_1',
                method: 'GET',
                headers: headers,
            };

            request(options, function(err, res, body) {
                    let json = JSON.parse(body);
                    console.log("Hi from getByPath");
                    console.log(json);
                  });
            // TODO: Eric TODO
          },


          //searching the document via document name
          searchCollection: async (collection, query) => {
            // TODO: Eric TODO

            // var headers = {
            //     'X-Cassandra-Token': token,
            //     'Content-Type': 'application/json'
            // };

            //var dataString = '{ "title": "Some Stuff", "other": "This is nonsensical stuff." }';

            var options = {
                url: 'https://' + databaseId+ '-' +databaseRegion+'.apps.astra.datastax.com/api/rest/v2/namespaces/' +astraKeyspace + '/collections?name=check_2',
                method: 'GET',
                headers: headers,
            };

            request(options, function(err, res, body) {
              console.log(res); 
                    let json = JSON.parse(body);
                    console.log("Hi from searchCollection");
                    console.log(json);
                  });
          },

        }
      },
    };
  };
