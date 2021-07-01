// This is the main javascript which will help you
// execute get/post/put/delete queries to Astra Cassandra database

const request = require('request');

module.exports = strapi => {
  return {
    async initialize() {
      const {
        token,
        databaseId,
        databaseRegion,
        keyspace,
        collection
      } = strapi.config.get('hook.settings.astra');

      const headers = {
        'X-Cassandra-Token': token,
        'Content-Type': 'application/json'
      };

      const url_ini = `https://${databaseId}-${databaseRegion}.apps.astra.datastax.com/api/rest/v2/namespaces/${keyspace}/collections/`;

      strapi.services.astra = {

        // creating the document
        create: async (document) => {
          const options = {
            url: url_ini + collection,
            method: 'POST',
            headers: headers,
            body: document
          };
          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },


        // Getting the document data using document id
        getById: async (documentId) => {
          const options = {
            url: url_ini + collection + '/' + documentId,
            method: 'GET',
            headers: headers,
          };
          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },

        // Getting the document via document path and returns the most recent entry of data in that specific document
        getByPath: async () => {
          const options = {
            url: url_ini + collection,
            method: 'GET',
            headers: headers,
          };

          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },

        // searching the document via document name
        searchCollection: async (query) => {
          const options = {
            url: url_ini + collection + '?where=' + JSON.stringify(query) + '&page-size=3',
            method: 'GET',
            headers: headers,
          };

          request(options, function (err, res, body) {
            return JSON.parse(body);
          });
        },
      }
    },
  };
};
