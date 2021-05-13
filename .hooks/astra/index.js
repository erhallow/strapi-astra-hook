

module.exports = strapi => {
    return {
      async initialize() {
        const { createClient } = require("@astrajs/collections");
        const astraClient = await createClient({
          astraDatabaseId: process.env.ASTRA_DB_ID,
          astraDatabaseRegion: process.env.ASTRA_DB_REGION,
          applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
        });
        console.log('my hook is loaded');
        strapi.services.astra = () => {
          return {
            hello: () => {
              return 'hello world';
            },
            get: () => {
             // TODO
            },
            create: () => {
              // TODO
            }
          }
        }
      },
    };
  };
