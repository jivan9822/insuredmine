import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Dropdown from './DropDown';
import { useRef } from 'react';

const AddNote = (props) => {
  const [enteredNote, setEnteredNote] = useState(''); // Store user input
  const [error, setError] = useState(); // If user will add empty note
  const [showDropDown, setShowDropDown] = useState(false); // To show drop-down
  const textRef = useRef();
  const addNoteHandler = (event) => {
    event.preventDefault();

    // if user will try to add empty note will through error
    if (enteredNote.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid Note (non-empty values).',
      });
      return;
    }

    // Sending user input to parent component by props up-lifting onSubmit
    props.onAddNote(enteredNote);

    // Clearing text-area after submit
    setEnteredNote('');
  };
  // Submit the form on Enter key press
  const onTextAreaKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addNoteHandler(event);
    }
  };
  // function to get user selection from drop-down list
  const getDropDownInput = (data) => {
    setEnteredNote(data);
    setShowDropDown(false); // hide drop-down
    textRef.current.focus();
  };

  // Reset button will clear text-area
  const onResetClickHandler = (e) => {
    e.preventDefault();
    setShowDropDown(false);
    setEnteredNote('');
  };

  // Reading user input
  const usernameChangeHandler = (event) => {
    setEnteredNote(event.target.value);
    // if user type @ then show drop-down list
    if (event.target.value.trim() === '@') {
      setShowDropDown(true);
    }
  };

  // This will close error window
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* This is custom Card component */}
      <Card className={classes.input}>
        <form onSubmit={addNoteHandler}>
          {showDropDown && (
            <div className={classes.dropDownPosition}>
              <Dropdown onSelect={getDropDownInput} />
            </div>
          )}
          <textarea
            ref={textRef}
            id='username'
            type='text'
            value={enteredNote}
            onChange={usernameChangeHandler}
            onKeyDown={onTextAreaKeyDown}
            autoFocus
          />
          <div className={classes.btnDiv}>
            <Button type='submit'>+Add Note</Button>
            <Button onClick={onResetClickHandler} type='submit'>
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddNote;
