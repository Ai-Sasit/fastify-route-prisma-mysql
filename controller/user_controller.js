const prisma = require("../src/connection");

module.exports.createUser = async function (req, reply) {
  const { name, email, password } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  reply.code(201).send(newUser);
};

module.exports.getUsers = async function (req, reply) {
  const users = await prisma.user.findMany();
  reply.send(users);
};

module.exports.getUser = async function (req, reply) {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  reply.send(user);
};

module.exports.updateUser = async function (req, reply) {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
    },
  });
  reply.send(updatedUser);
};

module.exports.deleteUser = async function (req, reply) {
  const { id } = req.params;
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  reply.send(deletedUser);
};
