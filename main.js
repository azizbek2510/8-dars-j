


const pupils = ["Gulzoda" , "Azizbek" , "Sitora" , "Mahmud" , "Dilmuhammad" , "Safina"]

// for (const ChiriganMiyyalar of pupils)

// if(ChiriganMiyyalar.includes("O") ) {
//     console.log(ChiriganMiyyalar, "o harifi bor");
// } else {
//     console.log(ChiriganMiyyalar, "o harifi yo'q");
// }




pupils.forEach(botlar => {
    console.log(botlar);
})


































































































































let words = ["non", "banan", "mashina", "asal", "olma", "aziza", "Gul", "nok"];

let wordsWithN = words.filter(word => word.includes('n'));

let wordsWithoutN = words.filter(word => !word.includes('n'));

console.log(wordsWithN, "'n' harfi ishtirok etgan so'zlar");
console.log(wordsWithoutN, "'n' harfi ishtirok etmagan so'zlar");
    


