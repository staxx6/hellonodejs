console.log("Starting nodes.js");

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(err) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () => fetchNotes();

let readNote = (title) => {
  return fetchNotes().filter((note) => note.title === title)[0];
}

let removeNote = (title) => {
  // fetch notes
  let notes = fetchNotes();
  // filter notes, removing the one with title of argument
  // alles was NICHT titel entspricht in den Array
  let filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes array
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

let logNote = (note) => `Note: "${note.title}" with body: "${note.body}"`;

module.exports = {
  addNote,
  readNote,
  removeNote,
  getAll,
  logNote
};
