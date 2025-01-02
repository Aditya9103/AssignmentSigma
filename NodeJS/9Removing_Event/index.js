const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', () => {
    console.log('User has subscribed!');
});

eventEmitter.emit('subscribe');
const handler = () => {
    console.log('Event triggered!');
};

eventEmitter.on('customEvent', handler);
eventEmitter.emit('customEvent');

eventEmitter.removeListener('customEvent', handler);
console.log('Event handler removed');
eventEmitter.emit('customEvent');
