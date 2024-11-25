const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    // Output the user's name
    console.log(`Your name is: ${name}`);

    // Close the program and output the closing message
    rl.on('close', () => {
	console.log('This important software is now closing');
    });

    // Close the readline interface
    rl.close();
});
