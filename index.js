const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(phrase => {
    phrase = phrase.split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1)));
    return phrase.join(' ');
  })
}
console.log(titleCased(tutorials));
// const titleCased = arr => {
//   return arr.map(phrase => {
//     phrase = phrase.split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1)));
//     return phrase.join(' ');
//   })
// }

// const titleCased = (tutorials) => {
//   return tutorials.map(phrase => titleCase(phrase))
// }

// function titleCase(str) {
//   str = str.toLowerCase().split(' ').map(word => (word.charAt(0).toUpperCase() + word.slice(1)));
//   return str.join(' ');
// }