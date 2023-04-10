'use strict';

/**
 * pronduct service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pronduct.pronduct',{
  find(params, populate){
    console.log("service called");
    return strapi.query("api::pronduct.pronduct").find(params, populate);
  }
});
