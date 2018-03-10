// let obj = {
//   name: 'Hello'
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Hello", "age": 26}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.age);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

let note = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof note);
console.log(note.title);
