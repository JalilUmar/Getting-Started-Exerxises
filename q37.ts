function make_shirt(
    size: string = 'Large',
     message : string = 'I Love Typescript!'){
    console.log(`You have ordered a "${size}" shirt with the message "${message}" printed on it. `);
}

make_shirt();
make_shirt("Medium" , "Hello World")
