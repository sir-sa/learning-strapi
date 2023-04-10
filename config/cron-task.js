// const {strapi} = require('@strapi/strai');

module.exports = {
  // myJob: {
  //   task: ({ strapi }) => {
  //     // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
  //     console.log('Running article check');
  //   },
  //   options: {
  //     rule: "0 0 1 * * 1",
  //   },
  // },

  '*/10 * * * *': {
        task: async () =>{
          // get all the articles to be published
          console.log('Running article check');
          const articlesToBePublished = await strapi.db.query('api::article.article').findMany({
            where: {
              publishedAt: {
                $null: new Date()
              },
              publish_at:{
                $lt: new Date()
              }
            }
          });

          await Promise.all(articlesToBePublished.map(article =>{
            return strapi.service('api::article.article').update(
              article.id,
              {data: {publishedAt: new Date()}}

            );
          }))

        },
        options: {
          // rule: "*/10 * * * *",
          // start 10 seconds from now
          start: new Date(Date.now() + 10000),
          // end 20 seconds from now
          // end: new Date(Date.now() + 20000),
        },
        // options: new Date(Date.now() + 10000),
        // options: {
        //   tz: 'GMT+0300',
        // }
  }
}



