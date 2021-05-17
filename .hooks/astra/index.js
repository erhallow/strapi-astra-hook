// See the full documentation on @astrajs/collections here:
// https://docs.datastax.com/en/astra/docs/astra-collection-client.html
const { createClient } = require("@astrajs/collections");

module.exports = strapi => {
    return {
      async initialize() {
        const {
          token,
          databaseId,
          databaseRegion,
          namespace,
        } = strapi.config.get('hook.settings.astra');

        const astraClient = await createClient({
          astraDatabaseId: databaseId,
          astraDatabaseRegion: databaseRegion,
          applicationToken: token,
        });
        strapi.services.astra = () => {
          return {
            getById: (collection, id) => {
             // TODO: Eric TODO
            },
            getByPath: (collection, path) => {
              // TODO: Eric TODO
            },
            searchCollection: (collection, query) => {
              // TODO: Eric TODO
            },
            create: (collection, document) => {
              // TODO: Eric TODO
            },
          }
        }
      },
    };
  };
