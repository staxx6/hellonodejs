console.log("Starting nodes.js");

let addNote = (title, body) => {
  console.log("Adding note", title, body);
};

let getAll = () => {
  console.log("List all notes");
}

let readNote = (title) => {
  console.log("Read note", title);
}

let removeNote = (title) => {
  console.log("remve note", title);
}

module.exports = {
  addNote,
  readNote,
  removeNote,
  getAll
};
