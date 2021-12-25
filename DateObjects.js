let val;
const d = new Date();
console.log(d)
val = d;
let month= val.getMonth();
console.log("current month is",month);
let year= val.getFullYear();
console.log("current year is",year);
let day= val.getDay();
console.log("today is"+" "+ day+" " + "day of a week");
let date = val.getDate();
let hour = val.getHours();
console.log("Today date is"+" "+date+" "+"of"+" "+month);
console.log("the hour is ", hour)
let min = val.getMinutes();
console.log("minutes are ",min);
let sec = val.getSeconds();
console.log("second are ",sec)
console.log("current time is "+" "+hour+":"+min+":"+sec);

switch (month) {
    case 0:
        console.log("its januray");
    break;
    case 1:
        console.log("its feb");
    break;
    case 2:
        console.log("its mar");
    break;
    case 3:
        console.log("its apr");
    break;
    case 4:
        console.log("its may");
    break;
    case 5:
        console.log("its jun");
    break;
    case 6:
        console.log("its july");
    break;
    case 7:
        console.log("its aug");
    break;
    case 8:
        console.log("its sep");
    break;
    case 9:
        console.log("its oct");
    break;
    case 10:
        console.log("its nov");
    break;
    case 11:
        console.log("its dec");
    break;

    default:
        break;
}
