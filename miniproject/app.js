import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a task");
  console.log("2: View Tasks");
  console.log("3: Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (Option) => {
  const option = parseInt(Option);

  if (option === 1) {
    rl.question("Enter a task: ", (task) => {
      todos.push(task);
      console.log("✅ Task Added:", task);
      showMenu();
    });
  } else if (option === 2) {
    if (todos.length === 0) {
      console.log("📝 No tasks found.");
    } else {
      console.log("\n📋 Your Tasks:");
      todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
      });
    }
    showMenu();
  } else if (option === 3) {
    console.log("👋 Exiting... Bye!");
    rl.close();
  } else {
    console.log("❌ Invalid option, try again.");
    showMenu();
  }
};

showMenu();
