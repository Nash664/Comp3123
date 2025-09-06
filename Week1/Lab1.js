//exercise 1

function capitalizeFirstL(str) {

    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

const inp = "the quick brown fox";
console.log("Exercise 1: Capitalize the first letter of each word in a given string : 'the quick brown fox'");
const out = capitalizeFirstL(inp);
console.log(out);
console.log("--------------------------------------------------");

//exercise 2

function max(a,b,c){
    return Math.max(a,b,c);
}

const maxValue = max(10, 20, 30);
console.log("Exercise 2: Find the maximum value of three numbers : 10, 20, 30");
console.log(maxValue);
console.log("--------------------------------------------------");

//3

function moveLastThreeToFront(str) {
  if (str.length < 3) {
    return "String must be at least 3 characters long.";
  }

  const lastThree = str.slice(-3);   
  const rest = str.slice(0, -3);   
  return lastThree + rest;       
}
console.log("Exercise 3: move the last three characters to the front of a given string");
console.log(` abcdef : ${moveLastThreeToFront("abcdef")}`);
console.log(` catwoman : ${moveLastThreeToFront("catwoman")}`);
console.log(` Batman : ${moveLastThreeToFront("Batman")}`);
console.log("--------------------------------------------------");

// exercise 4

function angleType(angle) {
    if (angle > 0 && angle < 90) {
        console.log(`${angle} : Acute angle`);
    } else if (angle === 90) {
        console.log(`${angle} : Right angle`);
    } else if (angle > 90 && angle < 180) {
        console.log(`${angle} : Obtuse angle`);
    } else if (angle === 180) {
        console.log(`${angle} : Straight angle`);
    } else {
        console.log(`${angle} : Invalid entry`);
    }
}

console.log("Angle Type");
angleType(38);   
angleType(90);   
angleType(130);  
angleType(180);  
angleType(250);  
angleType(-10); 
console.log("------------------------------------")


//Exercise 5






