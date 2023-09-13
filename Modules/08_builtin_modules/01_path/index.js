// the path module provides utilities for working with file and dir path

// to make use of a builting module , we first have to import it and to
// import a built in module , we use require function


const path = require('node:path') // node is to indicate a builtin module, it is same as const path = require('path')

// console.log("1. ",__filename) // get the full path of the file
// console.log("2. ",__dirname) // get the full path of the folder

// console.log("3. ",path.basename(__filename))    // name of the file
// console.log("4. ",path.basename(__dirname))     // name of the folder

// console.log("5. ",path.extname(__filename))     // return the string after '.' char in path
// console.log("6. ",path.extname(__dirname))      // return the string after '.' char in path

// console.log("7. ",path.parse(__filename))       // returns an object from the path string - opposite of the format()
// console.log("8. ",path.format(path.parse(__filename)))  // returns an string from the path object - opposite of the parse()

// console.log("9. ",path.isAbsolute(__filename)) //true   // determine if the path is an absolute path
// console.log("10. ",path.isAbsolute('./data.js')) //false    // An absolute path will always resolve to the same location, regardless of the working directory.



// path.join() - Join all arguments together and normalize the resulting path.
// console.log("1. ",path.join("folder_1","folder_2","folder_3","index.js"))
// console.log("2. ",path.join("folder_1/","//folder_2","folder_3","index.js"))
// console.log("3. ",path.join("/folder_1","folder_2","../folder_3","index.js"))
// console.log("3. ",path.join(__dirname,"index.js"))


console.log("1. ",path.resolve("folder_1","folder_2","folder_3","index.js"))
console.log("2. ",path.resolve("folder_1/","//folder_2","folder_3","index.js"))
console.log("3. ",path.resolve("/folder_1","folder_2","../folder_3","index.js"))
console.log("3. ",path.resolve(__dirname,"index.js"))