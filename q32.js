"use strict";
let currentUsers = ['Jalil', 'Umar', 'Eric', 'John'];
let newUsers = ['Shoaib', 'Umar', 'Ali', 'Ahmed'];
for (let user of newUsers) {
    let usernameTaken = false;
    for (let current of currentUsers) {
        if (user.toLowerCase() === current.toLowerCase()) {
            console.log(`Sorry, The username ${user} is already taken.`);
            usernameTaken = true;
            break;
        }
    }
}
if (!usernameTaken) {
    console.log(`The username ${user} is available.`);
}
