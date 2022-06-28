"use strict";

const { asyncMiddleware, commonFunctions } = global;

const { Users } = global.db;

module.exports = function (router) {
  router.get(
    "/",
    asyncMiddleware(async (req, res) => {
      let user = await Users.findOne({
        where: { email: "emag@insula-animalelor.ro" },
      });

      if (!user) {
        user = await Users.create({
          email: "emag@insula-animalelor.ro",
          nume: "Popa",
          prenume: "Andrei",
        });
      }

      const token = commonFunctions.createToken({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        user: user,
        token: token,
      });
    })
  );
};
