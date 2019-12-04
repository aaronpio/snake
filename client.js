const net = require("net");
const stdin = require("process").stdin;

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    handleUserInput(key);
  });

  return stdin;
};

setupInput();

const handleUserInput = key => {
  if (key === "\u0003") {
    console.log("I'm outty");
    process.exit();
  }
  //else if( ) {}
};

const connect = () => {
  const client = net.createConnection({
    host: "192.168.0.103",
    port: 50541
  });
  // interpret incoming data as text
  client.setEncoding("utf8");

  client.on("connect", () => {
    console.log("You're in the game!");
    client.write("Name: AAR");
    // client.write("Move: down");
    // client.write("Move: left");
    // client.write("Move: up");
  });

  client.on("data", data => {
    console.log(data);
  });

  return client;
};

module.exports = { connect };
