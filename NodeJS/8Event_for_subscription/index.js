const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', () => {
    console.log('User has subscribed!');
});

eventEmitter.emit('subscribe');
