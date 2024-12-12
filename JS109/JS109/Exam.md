

```javascript
let letters = ["a", "b", "c"];
let numbers = [3, 4.5, 5];
let num;
const FOUR = Math.floor(numbers[1]);
const double = (num) => num * 2;
double(letters[0]);
```


Objects:

- letters ln 1
- numbers ln 2
- double ln 5 
- Math object (it is not created, as it already exists in JS memory)

Variables:

- letters ln 1
- numbers ln 2
- num ln 3
- FOUR ln 4
- double ln 5
- num ln 5

Primitives:

- "a", "b", "c" ln 1
- 3, 4.5, 5 ln 2
- undefined ln 3
- 1, 4.5, 4 ln 4
- 2 ln 5
- 0, "a", NaN ln 6


In example two, we instead use reassignment and the `concat()` method to modify `arr1`. When invoking the non-destructive `.concat()` method on `arr1`, passing in the argument `[4]`, we return a **new** array `[ 1, 2, 3, 4 ]`. In the same line, `arr1` is reassigned to this new array.  Reassignment will break the link between `arr1` and its original object `[ 1, 2, 3]`. However, this object is still being referenced by `arr2`



In example two, we instead use reassignment and the `concat()` method to modify `arr1`. Reassignment breaks the linkage between the variable and the object. After line 3 is executed, `arr1` points to a **different** object in memory, and thus their interdependence is broken. 

We must also note that `concat()` doesn't mutate an object, but rather returns a copy of that object. Because of this, the obj referenced by `arr2` remains unaltered. After line 3 executes, we have two distinct objects in memory, which is reflected in the logs.