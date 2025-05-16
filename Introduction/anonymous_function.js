function greeting()
{
    console.log("Hello, World I am here !");
}

console.log("Before");
setTimeout(greeting, 1000)
console.log("After")


console.log("Before")

setTimeout((fucntionn) => {
    console.log("i am anonymous")
}, 3000);

console.log('after')


const multiply = function(a, b)
{
    return a+b
}

console.log(multiply(4,3))