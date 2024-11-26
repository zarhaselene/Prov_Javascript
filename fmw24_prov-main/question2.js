// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
  // Din kod här
  const longestString =
    str1.length > str2.length ? str1.toLowerCase() : str2.toLowerCase();
  const longestStringArray = longestString.split("");
  const shortestString = str1.length > str2.length ? str2 : str1;

  let equalityCounter = 0;

  shortestString.split("").forEach((letter, index) => {
    if (letter === longestStringArray[index]) {
      equalityCounter++;
    }
  });

  return equalityCounter;
}

// console.log(equalLetterPositions("go", "DO")); // Returnerar 1 (o och O är på samma position i båda strängarna)
// console.log(equalLetterPositions("hello", "world")); // Returnerar 1 (l är på samma position i båda strängarna)
// console.log(equalLetterPositions("detsamma", "detta")); // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

module.exports = equalLetterPositions;
