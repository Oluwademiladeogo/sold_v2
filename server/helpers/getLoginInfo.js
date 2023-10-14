module.exports = (token) => {
  const response = {
    Status: 200,
    details: [
      {
        token: token,
        name: "demilade",
        password: "mypassword",
      },
    ],
  };
  return response;
};
