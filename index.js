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

function findTheCheese(foods) {
  for (var i=0; i<foods.length; i++){
    if (foods[i] === 'cheddar' ||
        foods[i] === 'gouda' ||
        foods[i] === 'camembert') {
      return foods[i];
    }
  }
  return 'no cheese!';
}

//This is my preferred method. The code is clean & simple. It iterates through each words in the 'foods' array. The if statement returns a value - if the current iterated value in the 'foods' array is either 'cheddar, camembert or gouda' then it will return that current value (marked as i) in question. If none of the conditions in the if statement are met, return 'no cheese!'. Simple!
