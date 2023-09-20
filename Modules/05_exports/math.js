// const add = (a,b) => {
//     return a+b;
// }

// 1
// module.exports = add;


// 2
// module.exports = (a,b) => {
//     return a+b;
// }

// 3
// const add = (a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return a-b;
// }

// module.exports = {add,sub};

module.exports.add = (a,b) => {
    return a+b;
}
module.exports.sub = (a,b) => {
    return a-b;
}

// instead of module.exports , you can just write the exports
// but in good practice use module.exports as just exports may leads to some issues