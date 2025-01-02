const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', () => {
    console.log('User has subscribed!');
});

eventEmitter.emit('subscribe');
eventEmitter.setMaxListeners(5);
console.log('Max listeners set to:', eventEmitter.getMaxListeners());
