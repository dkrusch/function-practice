// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0) {
//         if (currentNumber % 7 === 0) {
//             console.log("ChickenMonkey")
//         }
//         else
//         {
//             console.log("Chicken")
//         }
//     }
//     else if (currentNumber % 7 === 0)
//     {
//         if (currentNumber % 5 === 0) {
//             console.log("ChickenMonkey")
//         }
//         else
//         {
//             console.log("Monkey")
//         } 
//     }
//     else
//     {
//         console.log(currentNumber)
//     }
// }

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 5 === 0 && currentNumber % 7 === 0)
//     {
//         console.log("ChickenMonkey")
//     }
//     else if (currentNumber % 5 === 0) 
//     {
//             console.log("Chicken")
//     }
//     else if (currentNumber % 7 === 0)
//     {
//             console.log("Monkey") 
//     }
//     else
//     {
//         console.log(currentNumber)
//     }
// }

// let bandNumber = 0
// const bands = []

// const takeNumber = function (band) 
// {
//     bandNumber++;
//     return(`${bandNumber}. ${band}`)
// }

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

// const voi = takeNumber("Voivod")
// console.log(voi)  // This should print "2. Underdogs" in the console

// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // An array that is grouping the objects together.
// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
// const cookedFood = [];

// function grill (currentObject) {
//     // Modify the food so that it is cooked
//     currentObject.cooked = true;

//     // Put the cooked food into the appropriate array
//     cookedFood.push(currentObject);
// };

// for (let i = 0; i < foods.length; i++)
// {
//     grill(foods[i])
//     console.log(cookedFood[i])
// }

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
addExcitement = (theWordArray, punc, amount) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
        if ((i+1) % 3 === 0)
        {
            buildMeUp+= " " + theWordArray[i] + punc.repeat(amount);
        }
        else
        {
            // Concatenate the new word onto buildMeUp
            buildMeUp+= " " + theWordArray[i];
            // Print buildMeUp to the console
        }
        console.log(buildMeUp)
    }

}

// I want to use a 4 asterisks
addExcitement(sentence, "*", 4)

// // I want to use a question mark
// addExcitement(sentence, "?")

// Invoke the function and pass in the array
// addExcitement(sentence)