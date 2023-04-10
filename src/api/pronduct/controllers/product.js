'use strict';

/**
 * pronduct controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::pronduct.pronduct');

module.exports = createCoreController("api::pronduct.pronduct", ({ strapi }) => ({
  async findAll(ctx) {
    const entries = await strapi.db.query("api::pronduct.pronduct").findMany();

    ctx.body = entries;
  },
}));
