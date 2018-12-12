function dwarfRollCall(dwarves) {
   var array = [];
   do {
    array.push(`${array.length + 1}. ${dwarves.shift()} `);
    } while (dwarves.length > 0);
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

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for (var i=0; i<foods.length; i++) {
    var cheeseindex = cheese.indexOf(foods[i]);
    if (cheeseindex !== -1) {
     return foods[i]; 
    }
  }
  return "no cheese!";
}
