//This is a strapi hook used to import all the necessary
//tokens,keyspaces or any variables required for the url
//which is defined in the .env file

module.exports = {
  settings: {
    astra: {
      enabled: true,
      token: process.env.ASTRA_TOKEN,
      databaseId: process.env.ASTRA_DB_ID,
      databaseRegion: process.env.ASTRA_DB_REGION,
      keyspace: process.env.ASTRA_DB_KEYSPACE,
      collection: process.env.ASTRA_DB_COLLECTION,
    },
  },
};
