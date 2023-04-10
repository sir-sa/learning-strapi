module.exports = {
  routes: [
    {
      method: "GET",
      path: "/hello/all",
      handler: "hello.findAll",
    },
    {
      method: "GET",
      path: "/hello/:id",
      handler: "hello.findOne",

    },
    // {
    //   method: "GET",
    //   path: "/hello/all/:id",
    //   handler: "hello.find",

    // },
  ],
};
