let str = "The Flintstones Rock!";
let padding = 0;

while (padding < 10) {
  console.log(str.padStart(str.length + padding));
  padding++;
}

