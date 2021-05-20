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
    //const check = await strapi.services.astra.create();
    //const check_1 = await strapi.services.astra.getById();
    //const check_2 = await strapi.services.astra.getByPath();
    const check_3 = await strapi.services.astra.searchCollection();
}	
