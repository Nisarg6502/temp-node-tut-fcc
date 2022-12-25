const EventEmitter = require('events') //stroing the evnts module in a class

const customEmitter = new EventEmitter() //instance of a class a.k.a object

//on - listen for an event
//emit - emit an event
//If we want custom, extend from class

customEmitter.on('response', (name,id)=> {
    console.log(`Data received for user ${name} with id ${id}`);
})
customEmitter.on('response', ()=> {
    console.log('Data received again');
})

//1]we can listen for several events at the same time for the same module and emit them at the same time.
//2]ordering matters in 'on' and 'emit'. We first listen and then emit. There's no point to 
//listen again after emitting. Hence, emit comes later.
//3]We can pass arguments to emit which can be accessed by listen to perform functions

customEmitter.emit('response', 'Nisarg', 6)