"use strict";
function make_shirt(size = 'Large', message = 'I Love Typescript!') {
    console.log(`You have ordered a "${size}" shirt with the message "${message}" printed on it. `);
}
make_shirt();
make_shirt("Medium", "Hello World");
