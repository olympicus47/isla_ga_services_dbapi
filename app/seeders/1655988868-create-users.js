// Password = admin@adqore123
const { getHashedPassword: hsh } = require("../lib/common");

const pwdTable = {
  popa: hsh("inventatoruldeparbrizeviolete"),
  dopa: hsh("asdasfgwarsdvehafgsafera"),
  flio: hsh("fcdvqbyf2387bwb823dqd"),
  serana: hsh("asfwgrfdcwegwefwefwfqwdqwqdqd"),
};

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          nume: "Popa",
          prenume: "Andrei",
          email: "emag@insula-animalelor.ro",
          password: pwdTable.popa,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nume: "Dopa",
          prenume: "Ropa",
          email: "doparopa@gmail.com",
          password: pwdTable.dopa,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nume: "Flio",
          prenume: "Clio",
          email: "flioclio@gmail.com",
          password: pwdTable.flio,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nume: "Serana",
          prenume: "Banana",
          email: "seranabanana@gmail.com",
          password: pwdTable.serana,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) =>
    queryInterface.bulkDelete(
      "users",
      [
        {
          nume: "Popa",
          prenume: "Andrei",
          email: "emag@insula-animalelor.ro",
          password: hash[Popa],
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nume: "Dopa",
          prenume: "Ropa",
          email: "dopa@ropa.com",
          password: hash[Dopa],
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nume: "Flio",
          prenume: "Clio",
          email: "flio@clio.ro",
          password: hash[Clio],
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nume: "Serana",
          prenume: "Banana",
          email: "flio@clio.ro",
          password: hash[Serana],
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),
};
