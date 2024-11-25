const assert = require('assert');
const displayMessage = require('./0-console');  // Adjust the path as needed

describe('Display Message', function() {
    it('should print the message correctly', function() {
        assert.doesNotThrow(() => {
            displayMessage("Hello NodeJS!");
        });
    });
});

