// error.controller.js

// Define your controller function
function handleError(req, res) {
    // Your code to handle the error
    // ...
}

function getErrorMessage(errMsg) {
    console.log(errMsg);
}

// Export the controller functions using module.exports
module.exports = {
    handleError: handleError,
    getErrorMessage: getErrorMessage
};

   