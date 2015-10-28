/*global Worker, Blob*/

/* https://github.com/audun-/node-web-worker
 *
 * Create a worker without using a seperate worker.js file either from function or from string
 * 
 */

'use strict';
const nodeWorker = {};

/*
 * @param Function
 * @return Worker
 *
 * Takes a function, stringifies it, assigns it to the onmessage property of the window of the worker,
 * then returns the worker.
 */

nodeWorker.create = function( func ){
    //Here, self represents the window object of the worker
    const stringifiedFunction = func.toString();
    const completedFunction = [`use strict; \n self.onmessage = ${stringifiedFunction}`];
    const blob = new Blob([ completedFunction , { type: 'text/javascript' }]);


    return Worker(window.URL.createObjectURL(blob));
};

module.exports = nodeWorker;
