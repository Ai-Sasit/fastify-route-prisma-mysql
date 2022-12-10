const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/user_controller");
module.exports = function (fastify, opts, done) {
  fastify.get("/users", getUsers);
  fastify.get("/user/:id", getUser);
  fastify.post("/user", createUser);
  fastify.put("/user/:id", updateUser);
  fastify.delete("/user/:id", deleteUser);
  done();
};
