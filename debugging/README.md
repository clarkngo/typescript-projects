# Creating your modified compiler
Reference: https://code.visualstudio.com/docs/typescript/typescript-tutorial

1. Create a `tsconfig.json`

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "out",
        "sourceMap": true
    }
}
```
2. Create a `helloworld.js`

```
let message : string = "Hello World";
console.log(message);
```

3. In your terminal, type `tsc`

It would generate a folder named `out` and js file named `helloworld.js` and map file named `helloworld.js.map` inside it.

4. In your `helloworld.ts` create a breakpoint by clicking the left side of a code line number to create a breakpoint.

5. Press F5 or in your menu, click Debug > Start Debugging.
