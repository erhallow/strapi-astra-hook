'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {

// 	const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

    const data = await strapi.services.astra.hello();
    //const check = await strapi.services.astra.create();
    //const check_1 = await strapi.services.astra.getById();
    //const check_2 = await strapi.services.astra.getByPath();
    const check_3 = await strapi.services.astra.searchCollection();

}
