'use strict';

/**
 * pronduct controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pronduct.pronduct');
// module.exports = createCoreController("api::pronduct.pronduct", ({ strapi }) => ({
//   async findAll(ctx) {
//     const entries = await strapi.db.query("api::pronduct.pronduct").findMany();

//     ctx.body = entries;
//   },
// }));



// async findOne(ctx){
//   const user = ctx.state.user;

//   ctx.query.filters = {
//       ...(ctx.query.filters || {}),
//       owner: user.id
//   };

//   return super.findOne(ctx);
// },
// async update(ctx){
//   const user = ctx.state.user;

//   ctx.query.filters = {
//       ...(ctx.query.filters || {}),
//       owner: user.id
//   };

//   return super.update(ctx);
// },
// async delete(ctx){
//   const user = ctx.state.user;

//   ctx.query.filters = {
//       ...(ctx.query.filters || {}),
//       owner: user.id
//   };

//   return super.delete(ctx);
// }
