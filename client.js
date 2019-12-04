const net = require("net");

const connect = () => {
  const client = net.createConnection({
    host: "192.168.0.103",
    port: 50541
  });
  // interpret incoming data as text
  client.setEncoding("utf8");

  client.on("connect", () => {
    console.log("you're in");
    client.write("Name: AAR");
  });

  client.on("data", data => {
    console.log(data);
  });

  return client;
};

module.exports = { connect };
