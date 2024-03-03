//data type
"haloo astrosphere";
`Grow together with us`;

console.log("Ini baris pertama\nDan ini baris kedua");

"as" + "tro" + "sphe" + "re";

let variableName = "value";
let x = "hello";
let x = "astrosphere";
console.log(x); // result: astrosphere

//variable naming
//valid
let camelCase = "lowercase word, then uppercase";
let dinner2Go = "seblak";
let I_AM_HUNGRY = true;
let _Hello_ = "say hello to astrosphere";
let $_$ = "money eyes";
//no valid
let total% = 90;
let 2fast2catch = "bold claim";
let function = false;
let class = "izy pizzy";

//variable type of operator
let name = "ram";
console.log(typeof name); // result: "string"

let number = 4;
console.log(typeof number); // result: "number"

let valueChecked = true;
console.log(typeof valueChecked); // result: "boolean"

let a = null;
console.log(typeof a); // result: "object"

//conditional
if (condition) {
    // body dari if
  }

//conditional if
// contoh 1
if (currentYear == 2022) console.log("You are right!");

// contoh 2
if (currentYear == 2022) {
  console.log("That's correct!");
  console.log("You're so smart!");
}

//if else
if (condition) {
    // blok kode jika condition true
  } else {
    // blok kode jika condition false
  }

//if else if
if (condition1) {
    // blok kode 1
  } else if (condition2) {
    // blok kode 2
  } else {
    // blok kode 3
  }

//truthy falsy
if (0) {
    // 0 is falsy
    console.log("Incorrect"); //Tidak akan dieksekusi
  }
  
  if (1) {
    // 1 is truthy
    console.log("Correct"); //Result: Correct
  }

  //comparison operator
console.log(2 > 1); // result: true
console.log(2 == 1); // result: false
console.log(2 != 1); // result: true

// Hasil perbandingan dapat ditetapkan ke dalam variabel,
// sama seperti nilai lainnya.

let result = 5 > 4; // menetapkan result sebagai perbandingan
console.log(result); // result: true

//compare string
console.log("Z" > "A"); // result: true
console.log("Glow" > "Glee"); // result: true
console.log("Bee" > "Be"); // result: true

//compare tipe data
console.log("2" > 1); // result: true, string '2' becomes a number 2
console.log("01" == 1); // result: true, string '01' becomes a number 1

console.log(true == 1); // result: true, masih ingat dengan truthy?
console.log(false == 0); // result: true, masih ingat dengan falsy

//strict equal
let m = 2;

// operator strict equal
console.log(a === 2); // result: true
console.log(a === "2"); // result: false

console.log(0 === false); // result: false
console.log("" === false); // result: false

//operator or
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

//operator and
console.log(true && true); // result: true
console.log(true && false); // result: false
console.log(false && true); // result: false
console.log(false && false); // result: false

//operator not
console.log(!1); // result: false
console.log(!0); // result: true

let y = true,
  b = false;

console.log(!a); // result: false
console.log(!b); // result: true