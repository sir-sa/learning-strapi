"use strict";

const {creatCoreController} = require("@strapi/strapi").factories;

module.exports = creatCoreController("api:: restaurant.restaurant", {
  async find(ctx){
      const category = ctx.state.category;
      ctx.query.filters = {
        ...(ctx.query.filters || {}),
        category: category.id,
      };
      return super.find(ctx);
  }
})
