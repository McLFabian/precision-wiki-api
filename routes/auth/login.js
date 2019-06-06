let jwt = require("jsonwebtoken");
let models = require("./../../models");
let bcrypt = require("bcrypt");

function LoginFunction(req, res, next) {
  let {username, password} = req.body;
  return models.Usuario.findOne({
    where: {rut: username}
  })
    .then(usuario => {
      if (!usuario)
        // Si no existe usuario
        return res.status(401).send({
          status: "fail",
          messages: ["Credenciales invalidas"]
        });
      // Parseo de datos de usuario para el token.
      usuario = usuario.dataValues;
      userData = {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        rut: user.rut,
        roles: []
      };
      roles = user.Roles.forEach(role => {
        userData.roles.push(role.id);
      });
      // Verificar contraseña
      if (bcrypt.compareSync(password, user.password)) {
        let token = jwt.sign(userData, "secret_key", {expiresIn: "12h"});
        return res.send({
          status: "success",
          token: token
        });
      } else {
        return res.status(401).send({
          status: "fail",
          messages: ["Credenciales invalidas"]
        });
      }
    })
    .catch(err => console.log(err));
}

module.exports = LoginFunction;