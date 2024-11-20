function triangle(num) {
  let iterations = num;
  for (let i = 0; i <= iterations; i++) {
    console.log(" ".repeat(num) + "*".repeat(i));
    num--;
  }
}

triangle(5);
triangle(9);