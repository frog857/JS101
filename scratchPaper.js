let addOne = 5;

function mutater(adder) {
  adder['a'] = 'mutated';
}

mutater(addOne);
console.log(addOne);