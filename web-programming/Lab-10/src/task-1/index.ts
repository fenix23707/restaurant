console.log("----------------- module 1 ------------------------------------")
// task 1
const black = 0;
const white = 1;
let field = [
    [black, white, white,],
    [white, white, black,],
    [black, black, white,],
    [black, black, white,],
    [black, black, white,],
]
console.log('numberOfBlackRectangles: ' + numberOfBlackRectangles(field));

// field[i][j] = color, color is black(0) or white(1)
function numberOfBlackRectangles(field: number[][]): number {
    let counter = 0;
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[0].length; j++) {
            if (field[i][j] == black) {
                counter++;
                clearRectangle(field, i, j);
            }
        }
    }
    return counter;
}

function clearRectangle(field: number[][], row: number, col: number) {
    for (let i = row; i < field.length && field[i][col] == black; i++) {
        for (let j = col; j < field[0].length && field[i][j] == black; j++) {
            field[i][j] = white;
        }
    }
}

// task 2
let arr = [1, 0, -4, 5, 6, -7, -2, 3, 8];
console.log('findMaxSum: ' + findMaxSum(arr));

function findMaxSum(arr: number[]): number {
    let maxSum = 0;
    let sum = maxSum;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        maxSum = Math.max(maxSum, sum);
        sum = Math.max(0, sum);
    }
    return maxSum;
}

// task 3

let a1 = [1, 2, 3];
let a2 = [1, 2, 2];
let a3 = [0, 2, 3];

console.log("task 3: " + similarInTwoArrays(a1, a2, a3).join(" "));

function similarInTwoArrays(arr1: any[], arr2: any[], arr3: any[]): any[] {
    let result: any[] = [];
    result.push(...arr1.filter(element => isExistOnlyInOneArr(element, arr2, arr3)));
    result.push(...arr2.filter(element => isExistOnlyInOneArr(element, arr1, arr3)));
    result.push(...arr3.filter(element => isExistOnlyInOneArr(element, arr1, arr2)));
    return [...new Set(result)];
}

function isExistOnlyInOneArr(elem: any, arr1: any[], arr2: any[]): boolean {
    return (arr1.includes(elem) && !arr2.includes(elem)) ||
        (arr2.includes(elem) && !arr1.includes(elem));
}


// task 4
const letters = "а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я".split(", ");
let text1 = ' Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч.';
let text2 = ' Любя — кайф жгуч.';
console.log(text1 + (isPangram(text1) ? " is pangram" : " is not pangram"));
console.log(text2 + (isPangram(text2) ? " is pangram" : " is not pangram"));

function isPangram(text: string): boolean {
    text = text.toLocaleLowerCase();
    return letters.every(value => text.includes(value));
}

// task 5
const daysOfWeek = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday".split(", ");

console.log("task 5: " + dayOfWeek(new Date(), 2));

function dayOfWeek(date: Date, k: number):string {
    date.setDate(date.getDate() + k);
    return daysOfWeek[date.getDay()];
}