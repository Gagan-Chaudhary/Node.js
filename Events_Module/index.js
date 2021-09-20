// Events Module
// Node.js has a built-in module called "events"
// where you can create-, fire-, and listen for - your own EventSource.CLOSED
// Ex:1 Registering the event to be fired only one time using once.
// Ex:2 Create an event emitter instance and register a couple of callbacks
// Ex:3 Registering for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("My name is Gagan");
// });
// event.on("sayMyName", () => {
//   console.log("My name is Chaudhary");
// });
// event.on("sayMyName", () => {
//   console.log("My name is God");
// });

// event.emit("sayMyName");

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

// event.on('checkPage')

event.emit("checkpage", 200, "ok");
