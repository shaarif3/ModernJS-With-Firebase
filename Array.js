let array = [12,32,56,45];
console.log(array)
let array1 = ["alpha", "beta", "gama"];
let finalArray = array.concat(array1);
console.log(finalArray)
let rev = finalArray.reverse();
console.log(rev)
finalArray.push("harim");
finalArray.unshift("perfect")
finalArray.pop()
finalArray.shift();
console.log(finalArray.slice(0,4), "check slice") 
console.log(finalArray.splice(0,2,"sweet","sour","candy","gala"), "check slice") 

console.log(finalArray)
let name = ["shaarif", "semi","abid","umair","bazil","farhan","ceira"];
console.log(name.sort());

