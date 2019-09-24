# VSCode shorcut commands
Find and replace all: `alt + cmd + f`

Move code line: `alt + up/down`

Copy a code line: `alt + cmd + up/down`

Add multiple line comments: `cmd + k + c`

Remove multiple line comments: `cmd + k + u`

Hide your files in the left pane: `cmd + b`

Access / Hide your terminal: `cmd + ` ` ` `

Edit multiple lines: `alt + left click (1 line) + left click (another line)`

# TypeScript terminal commands
## Compile
```
tsc demo.ts
```
## Run
```
tsc node demo.js
```
## Compile and Run
```
tsc demo.ts && node demo.js
```
## Auto-compile using the `-w` or `-watch` command
```
tsc demo.ts -w
```
## Specify ECMAScript target version using `-t` or `--target` command
```
tsc demo.ts -t es5
```
## Target version and auto-compile
```
tsc demo.ts -t es5 -w
```