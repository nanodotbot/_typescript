let phoneNumber = 'string';

phoneNumber = 4; //error

let number: number = 4; // just a test

function printKeyValue(key: string, value: number | string) { //value is of type any
    return `${key}: ${value}`;
}
printKeyValue('Courage', 1337); // Prints: Courage: 1337
printKeyValue('Mood', 'scared'); // Prints: Mood: scared
printKeyValue('Mood', true); // error

function greet(name = 'Aisle Nevertell') { // will be of type string
    console.log(`Hello, ${name}!`);
}

function greet(name = 'Aisle Nevertell'): void { // will be of type string
    console.log(`Hello, ${name}!`);
}
