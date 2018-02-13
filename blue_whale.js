
var doubleQuoteStringRegExp = /(?!^)".*?"/g
var bracketStringRegExp = /\[\$.*?\]/g

var rules = [];

function Rule(rule_str,callback){
    rules.push({rule_pattern : rule_str ,callback : callback});
}


function Run(code){
    var lines  = code.split('\n')
    for(var j=0;j<lines.length;j++){
        var line  = lines[j]
        //console.log("--line",line)
        for(var i=0;i<rules.length;i++){
            var rule  =rules[i];
            var str1  = rule.rule_pattern.replace(bracketStringRegExp,"*")
            var str2 =  line.replace(doubleQuoteStringRegExp,"*")
            //console.log('find match : ',str1,' == ','user input :',str2)
            if(str1==str2){
                //console.log('match rule : ',str1,' == ','user input :',str2)
                var user_inputs  = line.match(doubleQuoteStringRegExp);
                var args_name  = rule.rule_pattern.match(bracketStringRegExp);
                args_name = args_name.map(function(a){return a.substring(2,a.length-1);})
                var arguments = {};
                for(var k=0;k<args_name.length && args_name.length == user_inputs.length;k++){
                    arguments[args_name[k]]= user_inputs[k]
                }
                //console.log('arguments',arguments)
                rule.callback(arguments)
                break;
            } 
        }
    }
}


//comment this line if you are using browser
exports.Rule = Rule
exports.Run= Run