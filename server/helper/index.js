const bcrypt = require("bcrypt")
const compareLogin = async(password, hashedPassword)=>{
    return await bcrypt.compare(
        password,
        hashedPassword,
        async (err, result) => {
          if (result) {
            console.log("no error");
            const payload = {
              name: user.name,
              email: user.email,
              exp: (Date.now() / 1000) * 60 * 60 * 24 * 2, //2 days
            };
            const token = await jwt.sign(
              payload,
              process.env.JWT_SECRET
            );
            res.cookie.authToken = token;
            console.log(res.cookie.authToken);
            return res.redirect("/");
          } else
            res.json({
              message: "passwords don't match",
            });
        }
      );
}

module.exports = {compareLogin}