

| **Action**             | Performed On                      | Side Effect                                | Return Value             | RV used?                        |
| ---------------------- | --------------------------------- | ------------------------------------------ | ------------------------ | ------------------------------- |
| Method call of Map     | Outer Array                       | None                                       | New array `[1, 3]`       | No                              |
| cb function            | Outer array elements (sub-arrays) | None                                       | `arr[0]`                 | yes, mapped to returned new arr |
| element acces `arr[0]` | each sub-array                    | none                                       | the element at 0th index | yes, console.logged             |
| console.log()          | RV of `arr[0]`                    | printed to console.                        | `undefined`              | no                              |
| return                 | `arr[0]`                          | assigned to 0th index of new copy of array | `1`                      | Yes                             |
|                        |                                   |                                            |                          |                                 |

| **Action**                          | Performed On                           | Side Effect         | Return Value      | RV used?                                                           |
| ----------------------------------- | -------------------------------------- | ------------------- | ----------------- | ------------------------------------------------------------------ |
| Method call forEach                 | nested arr                             | none                | undefined         | yes, assigned to myArr                                             |
| callback function of forEach        | each subarray                          | none                | a mapped arr      | no, via forEach                                                    |
| Method call map                     | `arr` local variable (parameter of cb) | None                | a new Arr         | No, because it's in a forEach                                      |
| cb function of map                  | each element in the subarrays          | None                | `undefined`       | explicity returned, but not used                                   |
| if conditional                      | `num > 5`                              | none                | `true` or `false` | yes, to determine control flow                                     |
| console.log()                       | `num` local variable                   | printed to console. | `undefined`       | yes, returned as an element in the newArr being constructed by map |
| variable declaration and assignment | myArr                                  | None                | `undefined`       | No                                                                 |
| comparison `>`                      | element in the subarray and `5`        | None                | Boolean val       | evaluated by `if`                                                  |
myArr will be undefined.



```javascript
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```


| **Action**          | Performed On                              | Side Effect | Return Value                                                          | RV used?                                                       |
| ------------------- | ----------------------------------------- | ----------- | --------------------------------------------------------------------- | -------------------------------------------------------------- |
| .filter method call | array of two objects                      | none        | array of objects                                                      | no                                                             |
| outer callback      | each object in array of objects           | none        | false, true                                                           | yes, to determine filter transformation                        |
| .keys method call   | `object` parameter in outer callback      | none        | array of keys of each object                                          | yes, it is used to call the `every` method via method chaining |
| .every              | the array returned by keys method         | none        | Boolean, true if all inner cb return true. false if one returns false | yes, explicitly returned by outer callback                     |
| inner callback      | each property in the objects of the array | none        | Boolean eval of the expression                                        | yes, used to determine RV of `every`                           |
|                     |                                           |             |                                                                       |                                                                |
