// 1
// const add = (a,b) => {
//     return a+b;
// }

// export default add;

// 2
// export default (a,b) => {
//     return a+b;
// }

// const add = (a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return a-b;
// }
// export default {add,sub};

// named exports , while importing this name should be same
export const add = (a,b) => {
    return a+b;
}
export const sub = (a,b) => {
    return a-b;
}