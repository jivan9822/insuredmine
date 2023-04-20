import React, { useState } from 'react';

import AddText from './components/Notes/AddNote';
import NotesList from './components/Notes/DisplayNotes';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddText onAddUser={addUserHandler} />
      <NotesList users={usersList} />
    </div>
  );
}

export default App;
