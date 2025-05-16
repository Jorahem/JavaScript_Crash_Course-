console.log("--------------Or operator --------------------------")
let name;

if(name === "virat" || name === "Dhoni"){
    console.log("You are a great cricket player");
}
else if(name === "Messi" || name ==="Ronaldo")
{
    console.log("You are a great football player");
}

else {
    console.log("You are Gali player");
}






console.log("----------------------AND Operator ------------------------")
let age = 25;
let hasDrivingLicense =true;
if(age >= 19 && hasDrivingLicense){
    console.log("You can drive");
}
else{
    console.log("you cannnot drive")
}


console.log("-------------------Not operator--------------------------------")
let isMarried = false;
if(!isMarried){
    console.log("You are not married");
}
else{
    console.log("You are married");
}