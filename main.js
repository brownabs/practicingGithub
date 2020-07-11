chocolateSteps = [
  {
  type: "vanilla",
  flavor: "vanilla bean",
  baked: true,
  mixed: false
}, 
{ type: "Milk chocolate",
flavor: "vanilla bean",
baked: true,
mixed: false}
]


function reverseCapitalize(str) {
  const string = Array.from(str);
  let reverseString = string.reverse();
  let joinString = reverseString.join('');
  console.log(joinString)
	let lowercaseString = joinString.toUpperCase();
	return lowercaseString
}

reverseCapitalize("abc")

const mealMaker = (arr) => {
  let newArray = []
  for (let foodObj of arr) {
    if (foodObj.type === "meat") {
      newArray.push(cook(foodObj));
    } else if (foodObj.type === "vegetable") {
      newArray.push(slice(foodObj));
    }
  }
 return newArray
}
const slice = (foodObj) => {
  let newfoodObject = {
    food: `${foodObj.food} slices`, 
    type: foodObj.type
  };
  console.log(newfoodObject.food)
  return newfoodObject.food
}
const cook = (foodObj) => {
  console.log(foodObj)
  let newfoodObject = {
    food: `cooked ${foodObj.food}`, 
    type: foodObj.type
  };
  return newfoodObject.food
}
// Define four objects in the following array. Two of each type
const arrayOfFoodObjects = [
  {
    "food": "chicken",
    "type": "meat"
  },
  {
    "food": "squash",
    "type": "vegetable"
  },
  {
    "food": "beet", 
    "type": "vegetable"
  }, 
  {
    "food": "beef",
    "type": "meat"
  }
  ]
// Invoke the mealMaker function and pass the array to it as an argument
let cookOrSlice = mealMaker(arrayOfFoodObjects);
console.log(cookOrSlice)

// Define factory functions
const addChassis = () => {
  let newMinivan = {
    chassis: "Minivan"
  }
  return newMinivan.chassis
};

const addEngine = (newMinivan) => {
  if (chassis in newMinivan){
    newChassis.engine = "V6";
  }
  return newMinivan;
};
const addSuspension = (newMinivan) => {
  if (chassis in newMinivan && engine in newMinivan) {
    newMinivan.suspension = "independent";
  }
  return newMinivan;
};
const addExhaust = (newMinivan) => {
  if (chassis in newMinivan && engine in newMinivan && suspension in newMinivan) {
    newMinivan.exhaust = "dual side exhaust";
  }
  return newMinivan;
};
const addBody = (newMinivan) => {
  if (chassis in newMinivan && engine in newMinivan && suspension in newMinivan && exhaust in newMinivan) {
    newMinivan.body = "minivan";
  }
  return newMinivan;
};
const addInterior = (newMinivan) => {
  if (chassis in newMinivan && engine in newMinivan && suspension in newMinivan && exhaust in newMinivan && body in newMinivan) {
    newMinivan.interior = "leather";
  }
  return newMinivan;
};
// Invoke each one in the right order to move down the assembly line


let newMinivan = "";
addChassis();
const addNewEngine = addEngine(newMinivan.chassis);
const addNewSuspension = addSuspension(newMinivan);
const addNewExhaust = addExhaust(newMinivan);
const addNewBody = addBody(newMinivan);
const addNewInterior = addInterior(newMinivan)

console.log("testing amend")
