'use strict';

/**
 * category router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::category.category');
// module.exports = {
//   routes: [
//     { // Path defined with a URL parameter
//       method: 'GET',
//       path: '/pronductions/:category/:id',
//       handler: 'Pronduct.findOneByCategory',
//     },
//   ]

// }


// module.exports = {
//   routes: [
//     {
//       method: "GET",
//       path: "/posts-report",
//       handler: "posts-report.postsReport",
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//   ],
// };
