# Install the TypeScript compiler
Reference: https://code.visualstudio.com/docs/typescript/typescript-tutorial

1. In your terminal:
```
npm install -g typescript
```

```
tsc --version
```

```
mkdir HelloWorld
cd HelloWorld
code .
```

2. Create a `helloworld.tsc` file.

3. In your `helloworld.tsc`
```
let message : string = "Hello World";
console.log(message);
```

4. In your terminal:

```
tsc helloworld.ts
```