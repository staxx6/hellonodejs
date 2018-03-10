console.log("Starting app.js.");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleHelp = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyHelp = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleHelp,
    body: bodyHelp
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleHelp
  })
  .command('remove', 'Remove a note', {
    title: titleHelp
  })
  .help()
  .argv;

let command = argv._[0];
// console.log("command:", command);
//console.log("yargs", argv);

if(command === 'add') {

  let note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log(`Note "${note.title}" with the body "${note.body}" is saved`);
  } else {
    console.log(`Note couldn't be saved!`);
  }
} else if(command === 'list') {

  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes:`);
  allNotes.forEach((note) => console.log(notes.logNote(note)));
} else if(command === 'read') {

  let note = notes.readNote(argv.title);
  if(note) {
    console.log("Read: " + notes.logNote(note));
  } else {
    console.log(`Couldn't read "${argv.title}"`);
  }
} else if(command === 'remove') {

  if(notes.removeNote(argv.title)) {
    console.log(`Title ${argv.title} was removed`)
  } else {
    console.log(`Title ${argv.title} was NOT removed!`);
  }
} else {
  console.log("Command not reconginzed");
}
