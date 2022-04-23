let userid = 'devbhatt';
let password = 'password';


const credentialsMain = {
    user: userid,
    host: "localhost",
    database: "vain",
    password: password,
    port: 5432,
    Connection: 'keep-alive',
  };

  const credentials = {
    user: userid,
    host: "localhost",
    database: "vain",
    password: password,
    port: 5432,
    Connection: 'keep-alive',
  };

  module.exports = {credentialsMain, credentials};
