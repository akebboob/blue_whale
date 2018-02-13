# Blue Whale JS

Developed your own programming langauge for noobs

## About
Blue whale is programming language inspired by cucumber testing framework.
With Blue Whale JS you can build your user friendly DSL with in seconds

## Getting Started
Here is quick hello world example (helloworld.js)

```
//use this if your are running node js 
var Rule  = require('./bluewhale.js').Rule
var Run = require('./bluewhale.js').Run

var name  = '';

//create your say hello rule
Rule("Say hello to [$name]",function(input){
    console.log("Hello",input['name'])
    name  = input['name'];
})

//another rule 
Rule("Ask how are you ?",function(input){
    console.log("How are you ",name,"?")
})

var code  = 'Say hello to "vivek"'+'\n'+'Ask how are you'
/*
    Output : 
        Hello vivek
        How are you vivek ?
*/
Run(code)
```
## How to use

Just copy paste blue_whale.js file in your project
