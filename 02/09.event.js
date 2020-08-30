var eventHandler = require('events');

//new instance
var _eventEmitter = new eventHandler.EventEmitter();

//create a new event name
_eventEmitter.on('xx123', function() {
    console.log('====================XX123 triggered======================');
});

_eventEmitter.on('xx456', function() {
    console.log('====================XX456 triggered======================');
});


_eventEmitter.emit('xx123');
_eventEmitter.emit('xx456');