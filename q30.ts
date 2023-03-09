let user : string[] = ['Admin', 'Jalil', 'Umar', 'Eric']
for(let i=0; i<user.length ; i++)
if(user[i] == 'Admin'){
    console.log(`Hello Admin, would you like to see a status report?`)
}
else{
    console.log(`Hello ${user[i]}, Thanks for logging in agian.`);
    
}