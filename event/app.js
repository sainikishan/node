const EventEmitter = require("events");

const emitter = new EventEmitter();

// hello kishan
// greet()
// emitter.on("greet", () => {
//     console.log("hello kishna");
// });
// emitter.emit("greet");


emitter.on("greet", (username,prof) => {
    console.log(`hello ${username},you are prof
    ${prof}`);
});
emitter.emit("greet","hello kishan saini","backend developer")
