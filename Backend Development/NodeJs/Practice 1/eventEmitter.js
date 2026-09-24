const eventEmitter = require('events')

const myEmitter = new eventEmitter();

myEmitter.on('orderPlaced', (orderName) => {
  console.log(`Order is Placed ${orderName}`);
})

myEmitter.on('orderPlaced', (orderName) => {
  console.log(`Email has been sent for ${orderName}`);
})

myEmitter.emit('orderPlaced', ('Pizza'))