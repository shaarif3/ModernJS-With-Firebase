let value = 8;
if(value>25){
    console.log("drink pepsi")
}
else if(value<=8)
{
    console.log("drink fanta");
}
else{
    console.log("dont  know")
}

let hour = 12;
let isWeekend = false;
if(hour<10 || hour >17){
    console.log("closed now")
}

else if(hour>10 && hour<=12){
    console.log("its perfect")
}
else{
    console.log("error!!")
}

(hour & isWeekend)?console.log("true"):console.log("false");