import React, { useState } from 'react';

import AddText from './components/Notes/AddNote';
import NotesList from './components/Notes/DisplayNotes';

function App() {
  const [notesList, setNotesList] = useState([]);

  const addNoteHandler = (note) => {
    setNotesList((prevUsersList) => {
      return [...prevUsersList, { note, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddText onAddNote={addNoteHandler} />
      <NotesList notes={notesList} />
    </div>
  );
}

export default App;
