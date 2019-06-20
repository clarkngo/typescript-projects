# Creating your modified compiler
Reference: https://code.visualstudio.com/docs/typescript/typescript-tutorial

1. Create a `tsconfig.json`

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "out"
    }
}
```
2. Create a `helloworld.js`

```
let message : string = "Hello World";
console.log(message);
```

3. In your terminal, type `tsc`

It would generate a folder named `out` and js file named `helloworld.js`.
