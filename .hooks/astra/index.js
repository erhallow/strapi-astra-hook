

module.exports = strapi => {
    return {
      async initialize() {
        console.log('my hook is loaded');
        strapi.services.astra = () => {
          return {
            hello: () => {
              return 'hello world';
            },
          }
        }
      },
    };
  };
