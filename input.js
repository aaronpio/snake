let connection;

const setupInput = client => {
  connection = client;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //takes input into from key then runs it through our handleUserInput func //
  stdin.on("data", key => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = key => {
  const binding = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  };

  if (key === "\u0003") {
    console.log("I'm outty");
    process.exit();
  }
  if (binding[key]) {
    connection.write(binding[key]);
  }
};

module.exports = { setupInput };
