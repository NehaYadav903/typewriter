//Alarm clock / timer which will beep after a specified amount of time has passed.
  //The user can specify an unlimited number of alarms using command line arguments

 //Get imput from terminal and create an array of times.

 let arguements = process.argv.slice(2);
 console.log(arguements);

 const timer1 = function(array) {

   if (array.length === 0) {
     return;
   }
   for (let i = 0; i < array.length; i++) {

     if (array[i] > 0) {
       //console.log(array[i]);
       setTimeout(() => console.log("\007"), array[i] * 1000);
     }

   }
 };

 timer1(arguements);
