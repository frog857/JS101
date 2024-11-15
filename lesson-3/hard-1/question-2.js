let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);


/**
 * What does the last line in the following code output?
 * This will output {first: [1, 2]}
 * Since objects are referenced in memory by a pointer, both numArray and
 * object["first"] variables point to the SAME object (array). If we use
 * a destructive method like push, we will permanently change that obj.
 */