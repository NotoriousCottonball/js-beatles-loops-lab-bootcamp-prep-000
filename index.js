function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i=0; i<4; i++) {
    emptyArray.push (`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}
function johnLennonFacts(array) {
  var newArray = [];
  let i=0;
  while (i<array.length) {
    newArray.push(`${array[i]}!!!`);
    i++;
  }
  return newArray;
}