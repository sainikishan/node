const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("user-login", (usrname) => {
    console.log(`User ${usrname} logged in`);
})

emitter.emit("user-login", "kishan");
emitter.emit("usr-purchase","kishan","laptop")