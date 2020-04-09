// var dayOfWeek = function(num) {
//     var daysArray = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

//     for(var i = 0; i < daysArray.length; i++)
//     {
//         if(num) {
//             console.log([i]);
//         }
//         // num = daysArray[i];
//         // console.log(num);
//     }
// }

// dayOfWeek(2);

function getDay(numDay) {
    return "sunday";
}

console.log("passing in 1 gets monday", getDay(0) === "sunday");
console.log("passing in 1 gets monday", getDay(1) === "monday");
console.log("passing in 1 gets monday", getDay(5) === "friday");
console.log("passing in 1 gets monday", getDay(8) === undefined);
