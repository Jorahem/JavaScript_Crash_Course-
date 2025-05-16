//call back fucntionn haii I am using

function greeting(name){
    console.log(`Hello, ${name}!`);
}

function processUserInput(callback)
{
    var name = prompt("Enter your name");
    callback(name);
}

processUserInput(greeting);