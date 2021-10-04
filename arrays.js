/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

stations.pop()                               // Removes the last selection (peterborough) from the array
stations.push("London Kings Cross")          // Added Kings Cross
 console.log(stations) ;                     // Displays in Terminal




/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */

stations.shift()

console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

stationCount = stations.length;

 console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations[2];

console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

stations[1] = "Berwick-upon-Tweed"

console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */

 index = stations.indexOf("Leeds");
    stations.splice(index, 1);

console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */

 let start = 3;
 let deleteCount = 0;
 stations.splice(start, deleteCount, 'Darlington');


console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */


if (stations.includes("Durham")) {
console.log("Durham is one of the stops") 
} else {
console.log("Durham is not a stop on this train") 
}


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */

 if (stations.includes("Durham")) {
    console.log("YAY Durham") 
    } else {
    console.log("Awww.. No Durham Today") 
}

