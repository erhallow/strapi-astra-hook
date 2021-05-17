module.exports = {
    settings: {
      astra: {
        enabled: true,
        token: process.env.ASTRA_TOKEN,
        databaseId: process.env.ASTRA_DB_ID,
        databaseRegion: process.env.ASTRA_DB_REGION,
        namespace: process.env.ASTRA_DB_NAMESPACE,
      },
    },
  };
