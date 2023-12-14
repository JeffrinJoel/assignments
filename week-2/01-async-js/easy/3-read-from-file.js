// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 

const fs = require("fs");

fs.readFile("name.txt" , "utf-8" , (err,data) => {
    if(err){
        console.log("Error!");
    }else{
        console.log(data);
    }
})