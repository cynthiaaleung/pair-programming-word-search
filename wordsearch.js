const wordSearch = (letters, word) => {
  
  if (letters.length === 0 || (!word)) {
    return false;
  }
  
  const horizontalJoin = letters.map(line => line.join(''));

  if (horizontalJoin.includes(word)) {
    return true;
  }

  let newhorizontalJoin = [];

  letters.forEach(() => newhorizontalJoin.push([]));
  
  for (let row = 0; row < letters.length; row++) {
    
    for (let col = 0; col < letters[row].length; col++) {
      newhorizontalJoin[col].push(letters[row][col]);
    }
  }

  const verticalJoin = newhorizontalJoin.map(line => line.join(''));
  //console.log(verticalJoin);
  if (verticalJoin.includes(word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;