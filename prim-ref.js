let user = {name:"shaarif"};
function callme(user){
    user.name="Alpha";
    console.log("name inside fn", user.name);

}
callme(user);
console.log(user.name);