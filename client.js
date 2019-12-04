const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const client = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  client.setEncoding("utf8");

  client.on("connect", () => {
    console.log("You're in the game!");
    client.write("Name: AAR");
  });

  return client;
};

module.exports = { connect };
