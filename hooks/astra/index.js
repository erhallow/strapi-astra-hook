module.exports = strapi => {
    return {
      async initialize() {
        const {
          token,
          databaseId,
          databaseRegion,
          namespace,
        } = strapi.config.get('hook.settings.astra');

        strapi.services.astra = {
          hello: () => {
            console.log('Hello world...');
          },
          getById: async (collection, id) => {
           // TODO: Eric TODO
          },
          getByPath: async (collection, path) => {
            // TODO: Eric TODO
          },
          searchCollection: async (collection, query) => {
            // TODO: Eric TODO
          },
          create: async (collection, document) => {
            // TODO: Eric TODO
          },
        }
      },
    };
  };
