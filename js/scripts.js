// # Ejercicios

// ## Arrays métodos callback

// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array
//Numbers siempre tiene que ser un array
//todo lo que lleve mas de un valor, manejarlo en plural
const multiplyIndex = (numbers) => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

multiplyIndex([1, 2, 3, 4]);
// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1
const numberDividedIndex = (numbers) => {
  const result = numbers.map((number, index) => {
    return number / (index + 1);
  });
  console.log(result);
};
numberDividedIndex([5, 2, 9, 12]);
// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const sameWordsCapitalLetters = (numbers) => {
  const result = numbers.map((number) => {
    return number.toUpperCase();
  });
  console.log(result);
};
sameWordsCapitalLetters(['jugar', 'caminar', 'saltar', 'correr']);

// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas y minúsculas.

const wordsBeginningWithThatLetter = (words, letter) => {
  const result = words.filter((word) => {
    return word[0] === letter;
  });
  if (result.length === 0) {
    console.log('ninguna palabra coincide');
  } else {
    console.log(result);
  }
};
wordsBeginningWithThatLetter(['jugar', 'caminar', 'saltar', 'correr'], 'c');

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumOfAllValues = (numbers) => {
  const result = numbers.reduce((acc, number) => {
    return acc + number;
  });
  console.log(result);
};
sumOfAllValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const itsSquareAndItsCube = (numbers) => {
  numbers.forEach((number) => {
    console.log(
      `Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(
        number,
        3
      )}`
    );
  });
};
itsSquareAndItsCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const capitalizedVowels = (letters) => {
  const vowels = 'aeiouáéíóú';
  const result = letters.split('').reduce((acc, letter) => {
    //esto transforma en array
    if (vowels.includes(letter.toLowerCase())) {
      return acc + letter.toUpperCase();
    } else {
      return acc + letter;
    }
  }, '');
  console.log(result);
};
capitalizedVowels('elefante');

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const moreThanFive = (numbers) => {
  const result = numbers.some((number) => {
    return number > 5;
  });
  console.log(result);
};
moreThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']
const wordsOfThatLength = (words, number) => {
  const result = words.filter((word) => {
    return word.length === number;
  });
  console.log(result);
};
wordsOfThatLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número
const dividers = (numbers, num) => {
  const result = numbers.filter((number) => {
    return number % num === 0;
  });
  console.log(result);
};
dividers([1, 2, 3, 4, 5, 6], 2);

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
const array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 },
];

const ageIsLessThanThirty = (users) => {
  const result = users.filter((user) => {
    return user.age < 30;
  });
  console.log(result);
};
ageIsLessThanThirty(array);
// - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

const oddOrEven = (numbers) => {
  const result = numbers.every((number) => {
    return number % 2 === 0;
  });
  console.log(result);
};
oddOrEven([1, 2, 3, 4, 5]);

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
const wordLength = (letters) => {
  const result = letters.sort((letter1, letter2) => {
    return letter1.length - letter2.length;
  });
  console.log(result);
};
wordLength(['flor', 'elefante', 'programacion', 'josefa', 'madrid']);
// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

const sameWordInReverseOrder = (letters) => {
  const result = letters.split('').reduce((acc, letter) => {
    return letter + acc;
  });
  console.log(result);
};
sameWordInReverseOrder('elefante');
// ## Retos!!

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

//   - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

//     [
//     {
//     id: "user001",
//     name: "Juan",
//     surname: "Pérez",
//     age: 30
//     },
//     {
//     id: "user002",
//     name: "María",
//     surname: "González",
//     age: 25
//     },
//     {
//     id: "user003",
//     name: "Pedro",
//     surname: "Sánchez",
//     age: 35
//     },
//     {
//     id: "user004",
//     name: "Ana",
//     surname: "Martínez",
//     age: 28
//     },
//     {
//     id: "user005",
//     name: "Luis",
//     surname: "López",
//     age: 40
//     }
//     ];
