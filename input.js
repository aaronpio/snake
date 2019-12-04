const setupInput = () => {
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
  if (key === "\u0003") {
    console.log("I'm outty");
    process.exit();
  }
  //else if( ) {}
};

module.exports = { setupInput };
