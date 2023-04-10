
"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitizeEntity } = require('strapi-utils');


module.exports = createCoreController("api::hello.hello", ({ strapi }) => ({
  async findAll(ctx) {
    const entries = await strapi.db.query("api::hello.hello").findMany();

    ctx.body = entries;
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    const {query} = ctx;

    const entity = await strapi.service('api::hello.hello').findOne(id, query);
    const sanitizeEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizeEntity);
  },

}));

// module.exports = {
//   async (ctx) =>{
//     const me = await strapi.entityService.find("api::hello.hello");

//     return me;
//   },
//   // async findAll(ctx) {
//   //   const me = await strapi.entityService.find("api::hello.hello",id);

//   //   return me;
//   // },
// }
