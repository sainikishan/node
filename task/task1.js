const EventEmitter = require("events");

const emitter = new EventEmitter();

// Object to store activity per user
const userActivity = {};

function initUser(username) {
    if (!userActivity[username]) {
        userActivity[username] = {
            login: 0,
            logout: 0,
            password: 0,
            profileUpdate: 0,
        };
    }
}

// Event listeners
emitter.on("user-login", (username) => {
    initUser(username);
    userActivity[username].login++;
    console.log(`User ${username} logged in`);
});

emitter.on("user-password", (username, device) => {
    initUser(username);
    userActivity[username].password++;
    console.log(`User ${username} logged in using ${device}`);
});

emitter.on("profile-update", (username, field) => {
    initUser(username);
    userActivity[username].profileUpdate++;
    console.log(`User ${username} updated profile field: ${field}`);
});

emitter.on("user-logout", (username) => {
    initUser(username);
    userActivity[username].logout++;
    console.log(`User ${username} logged out`);
});

// Optional: Handle unknown events (optional helper)
function safeEmit(event, ...args) {
    if (emitter.listenerCount(event) === 0) {
        console.log(`Unknown event: ${event} with arguments: ${args}`);
        return;
    }
    emitter.emit(event, ...args);
}

// Summary event
emitter.on("summary", () => {
    console.log(`\n--- User Activity Summary ---`);
    for (const user in userActivity) {
        const data = userActivity[user];
        console.log(`\nUser: ${user}`);
        console.log(`- Logins: ${data.login}`);
        console.log(`- Logouts: ${data.logout}`);
        console.log(`- Password Used: ${data.password}`);
        console.log(`- Profile Updates: ${data.profileUpdate}`);
    }
});

// Emit events
emitter.emit("user-login", "kishan");
emitter.emit("user-password", "kishan", "laptop");
emitter.emit("profile-update", "kishan", "email");
emitter.emit("user-logout", "kishan");

emitter.emit("user-login", "saini");
emitter.emit("user-password", "saini", "mobile");
emitter.emit("user-logout", "saini");

safeEmit("user-profile", "saini", "name"); // handled safely as unknown event

emitter.emit("user-login", "kishan");
emitter.emit("profile-update", "kishan", "phone");
emitter.emit("user-logout", "kishan");

emitter.emit("summary");
