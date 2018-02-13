//use this if your are running node js 
var Rule  = require('./blue_whale.js').Rule
var Run = require('./blue_whale.js').Run

var name  = '';

//create your say hello rule
Rule("Say hello to [$name]",function(input){
    console.log("Hello",input['name'])
    name  = input['name'];
})

//another rule 
Rule("Ask how are you ?",function(input){
    console.log("How are you",name,"?")
})

var code  = 'Say hello to "vivek"'+'\n'+'Ask how are you ?'

Run(code)
/*
> node .\helloworld.js
Hello vivek
How are you vivek ?
*/