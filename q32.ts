let currentUsers : string[] = ['Jalil', 'Umar', 'Eric', 'John' ]
let newUsers : string[] = ['Shoaib', 'Umar', 'Ali' , 'Ahmed']

for(let user of newUsers){
    let usernameTaken : boolean = false
    for(let current of currentUsers){
        if(user.toLowerCase() === current.toLowerCase()){
            console.log(`Sorry, The username ${user} is already taken.`);
            usernameTaken = true
            break
            
        }
    }
}
if(!usernameTaken){
    console.log(`The username ${user} is available.`)
    
}