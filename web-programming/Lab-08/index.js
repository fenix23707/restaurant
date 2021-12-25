//1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и false в противном случае.

function identicalLetters(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  set1 = new Set(str1.split(""));
  set2 = new Set(str2.split(""));

  return set1.size === set2.size && [...set1].every((value) => set2.has(value));
}

console.log("identicalLetters:");
console.log(identicalLetters("heLLLllo", "heeello"));
console.log(identicalLetters("hGeLLLllo", "heeello"));
console.log(identicalLetters("", ""));
console.log(identicalLetters("g", "a"));
console.log(identicalLetters("g", "g"));

//2. Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
function printArrayWithDelay(arr, delay) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
      console.log(i);
    }, delay);
  }
}
console.log("");

console.log("printArrayWithDelay:");
// printArrayWithDelay([1, 2, 3, 5, 1], 3000);

// 3. Напишите функцию, которая на вход получает произвольное количество аргументов и возвращает массив,
// состоящих только из уникальных значений параметров функции.

function uniqueValues(...args) {
  set = new Set(args);
  return Array.from(set);
}

console.log(uniqueValues(1, 1, 1, 2, 3, "as", "as", "s"));

// 4. Написать функцию, принимающую в аргументах массив и возвращающую новый массив, в котором отсортированы все нечетные
//числа по возрастанию, четные числа по убыванию, но при этом сами чётные и нечетные числа остаются на своих местах.
// ([7, 3, 4, 9, 5, 2, 17] -> [3, 5, 2, 7, 9, 4, 17]).

function comparator(v1, v2) {
  return v2 - v1;
}

function sortEvenAndOddNumber(arr) {
  odd = [];
  even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  odd.sort(comparator);
  even.sort(comparator);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = even.pop();
    } else {
      arr[i] = odd.pop();
    }
  }
  return arr;
}

console.log("sortEvenAndOddNumber:");
console.log(sortEvenAndOddNumber([7, 3, 4, 9, 5, 2, 17]));

// 5. Реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время в секундах,
//  через которое взорвется, выполняет обратный отсчет, и в конце выводит «взрыв» (строку, которую вернет через заданное время).
Bomb = function (time) {
  this.start = function () {
    intervalID = setInterval(function () {
      console.log(time--);
      if (time < 0) {
        window.clearInterval(intervalID);
        console.log("Boom")
      }
    }, 1000);
  }
}

bomb4sec = new Bomb(4);
console.log(bomb4sec.start());

//  6. Написать функцию, принимающая на вход массив дат и сортирующая их в порядке возрастания.
function sortDate(arr) {
  arr.sort(function (o1, o2) {
    return o1 - o2;
  })
}

arr = new Array(new Date(), new Date(2021, 11,1), new Date(2021, 11,28), new Date(2021, 11,4));
sortDate(arr)
console.log(arr)

//  Реализовать функцию f: f(2, 3) -> 5 и f(2)(3) -> 5.
function f(a, b) {
  if (b !== undefined) {
    return a + b;
  } else {
    return function (b) {
      return a + b;
    }
  }
}

console.log('sum: ' + f(2)(3))
console.log('sum: ' + f(2,3))