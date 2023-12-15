// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman```

const fs = require("fs");

fs.readFile("name.txt", "utf-8", (err,data) => {
    let string = data;
    if(err){
        console.log("Error");
    }else{
        string = string.replace(/\s+/g, ' ').trim();
        console.log(string);
    }
})