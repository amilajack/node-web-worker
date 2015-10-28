# worker-create-node
Port of https://github.com/zevero/worker-create/, intended for use with browserify.


Create a worker without using a seperate worker.js file

###Installation
    npm install node-web-worker;
###Usage:
    //Assumes Worker API is available on the client
    const nodeWorker = require('node-web-worker');

    //Here, self refers to the window object in which the worker executes
    const worker = nodeWorker.create( function ( e ) {  //from function
        self.postMessage('Example post from Worker'); //your code here
    });

