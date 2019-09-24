console.log('Hello World');
var message;
message = 'Hello TypeScript';
console.log(message);
// Error: Type '30' is not assignable to type 'string'.
// message = 30;
var bool = [true, false];
console.log(bool[1]);
// Error: Cannot redeclare block-scoped variable 'a'.
// let a: string = 'hello';
// let a = 'hello';
// Error: Cannot redeclare block-scoped variable 'bool'.
// const bool: boolean[] = [true, false];
