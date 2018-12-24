function dwarfRollCall(dwarves) {
   var array = [];
   do {
    array.push(`${array.length + 1}. ${dwarves.shift()} `);
    } while (dwarves.length > dwarves.length/2);
    return array.join("");
}

function dwarfRollCall(dwarves) {
   var array = [];
   
   for(var i = 0; i < dwarves.length/2; i++){
     
   }
   do {
    array.push(`${array.length + 1}. ${dwarves.pop()} `);
    } while (dwarves.length > dwarves.length/2);
    return array.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var str = planeteerCalls.toString();
  var caps = str.toUpperCase();
  var capsarray = caps.split(",");
  var newarray = [];
  for (let i=0; i < capsarray.length; i++) {
    newarray.push(`${capsarray[i]}!`);
  }
  return newarray;
}

function longPlaneteerCalls(words) {
  for (let i=0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese(foods) {
  for (var i=0; i<foods.length; i++){
    if (foods[i] === 'cheddar' ||
        foods[i] === 'gouda' ||
        foods[i] === 'camembert' ||
        foods[i] === 'swiss') {
      return foods[i];
    }
  }
  return 'no cheese!';
}

//It iterates through each words in the 'foods' array. The if statement returns a value - if the current iterated value in the 'foods' array is either 'cheddar, camembert or gouda' then it will return that current value (marked as i) in question. If none of the conditions in the if statement are met, return 'no cheese!'. Simple!



function startsWithB(words){
  var barray = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].startWith('b')) {
      barray.push(words[i]);
    }
  }
  return barray;
}

"brian".startsWith("b") // true
"apple".startsWith("b") // false

startsWithB(['brian', 'jill', 'jane']) // ['brian']
startsWithB(['banana', 'berry', 'cherry']) // ['banana', 'berry']
startsWithB(['dwarf', 'planeteer', 'cheese']) // []
