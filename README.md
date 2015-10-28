# worker-create-node
Port of https://github.com/zevero/worker-create/, intended for use with browserify.


Create a worker without using a seperate worker.js file

###Installation
    npm install node-web-worker;
###Usage:
    //Assumes Worker API is available on the client
    const nodeWorker = require('node-web-worker');
    const worker_url = nodeWorker.create( function ( e ) {  //from function
      console.log('Example post from Worker'); //your code here
    });

    const worker = new Worker(worker_url);




