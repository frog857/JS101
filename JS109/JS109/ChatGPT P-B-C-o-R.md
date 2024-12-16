
```javascript
let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);
```

| colors (global) |     |                            |     | colors (local) |
| --------------- | --- | -------------------------- | --- | -------------- |
| .        V      |     |                            |     | .      V       |
| Reference1      |     |                            |     | Reference2     |
|                 | _\| |                            | \|_ |                |
|                 |     | `["red", "green", "blue"]` |     |                |
|                 |     |                            |     |                |

### Suggested Improvements to Answer 1:

1. **Expand on “passed-by-reference”**:
    
    - Clarify that JavaScript passes a **copy of the reference**, not the reference itself, to avoid perpetuating a common misconception.
    
    For example:
    
    > "...which contains a reference to the array `["red", "green", "blue"]`. Within the function, the parameter `colors` receives a **copy of that reference**, so any mutations to the array affect the original object."