// Sample story (you can change it)
let story =
  "The dog literally ran through the beautiful park and saw a really bad thing happening in the very distant area";

// Unnecessary words and bad words
const unnecessaryWord = "literally";
const misspelledWord = "distantt";
const badWord = "bad";

// Convert string to array
let storyWords = story.split(" ");

// Print array (optional check)
// console.log(storyWords);

// Convert back to string (original story)
console.log(storyWords.join(" "));

// COUNT WORDS
let count = 0;

storyWords.forEach((word) => {
  count++;
});

console.log("Word Count:", count);

// FILTER OUT UNNECESSARY WORDS
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

// REPLACE MISSPELLED WORD
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? "beautiful" : word;
});

// FIND BAD WORD INDEX
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});

console.log("Bad word index:", badWordIndex);

// REPLACE BAD WORD
if (badWordIndex !== -1) {
  storyWords[badWordIndex] = "really";
}

// CHECK LENGTH (every word <= 10 letters)
let lengthCheck = storyWords.every((word) => {
  return word.length <= 10;
});

console.log("All words <= 10 chars:", lengthCheck);

// FINAL STORY STRING
let resultString = storyWords.join(" ");

console.log("Final Story:");
console.log(resultString);