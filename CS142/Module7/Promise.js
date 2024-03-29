// Make a promise
var makePromise = function (action) {
    return new Promise(function (resolve, reject) {
        if (action === 'Study') {
            // If successful, resolve the promise
            resolve('Good job!');
        }
        else {
            reject('Study harder.');
        }
    });
};
// Reusable function to check the promise
var checkPromise = function (theAction) { return makePromise(theAction).then(function (resolve) {
    console.log(resolve);
}, function (reject) {
    console.log(reject);
}); };
// Check the promise 1st time
var theAction = 'Skip class';
checkPromise(theAction);
// Check the promise 2nd time
theAction = 'Study';
checkPromise(theAction);
