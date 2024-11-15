let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let copyObj = JSON.parse(JSON.stringify(munsters)); // => deep copy.
let copyObj1 = {...munsters}; // => only a shallow copy.
let copyObj2 = Object.assign({}, munsters); // => also only a shallow copy.

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(copyObj);

console.log(munsters.Grandpa);