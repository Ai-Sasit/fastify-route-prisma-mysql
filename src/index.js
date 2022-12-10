const fastify = require("fastify")();

fastify.register(require("../router/user_route"), { prefix: "/api" });

fastify.listen({ port: 3000 }, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-fastify#using-the-rest-api`)
);
