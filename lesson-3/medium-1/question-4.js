function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let arr = [1, 2, 3];

let newArr = addToRollingBuffer1(arr, 5, 100);
console.log(newArr);
console.log(addToRollingBuffer2(newArr, 5, 100));

/**
 * The first implementation will mutate the buffer passed in. This is because
 * objects are pass-by-reference. Therefore, when we call the push method on
 * buffer, it will mutate the actual object pointed to by the parameter buffer
 * as well as any other variables outside the function scope.
 * Implementation 2 creates a new array with the function-scoped variable
 * buffer as a pointer. We can mutate this array and return it without
 * worrying about any other globally scoped variables that might be
 * referencing the original buffer obj.
 */
