"use strict";
let age30 = 70;
if (age30 < 2) {
    console.log('This person is a baby.');
}
else if (age30 >= 4 && age30 < 2) {
    console.log('This person is a toddler.');
}
else if (age30 >= 13 && age30 < 4) {
    console.log('This person is a teenager.');
}
else if (age30 >= 20 && age30 < 13) {
    console.log('This personn is an adult.');
}
else if (age30 > 20 && age30 <= 65) {
    console.log('This person is old aged.');
}
else {
    console.log(`We need to find some users!`);
}
