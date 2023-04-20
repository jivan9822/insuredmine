import React from 'react';

import Card from '../UI/Card';
import classes from './NoteList.module.css';

const NotesList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.notes.map((note) => (
          <li key={note.id}>{note.note}</li>
        ))}
      </ul>
    </Card>
  );
};

export default NotesList;
