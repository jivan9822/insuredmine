import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Dropdown from './DropDown';

const AddNote = (props) => {
  const [enteredNote, setEnteredNote] = useState('');
  const [error, setError] = useState();
  const [showDropDown, setShowDropDown] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredNote.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid Note (non-empty values).',
      });
      return;
    }
    props.onAddUser(enteredNote);
    setEnteredNote('');
  };
  const getDropDownInput = (data) => {
    setEnteredNote(data);
    setShowDropDown(false);
  };
  const onResetClickHandler = (e) => {
    e.preventDefault();
    setShowDropDown(false);
    setEnteredNote('');
  };
  const usernameChangeHandler = (event) => {
    setEnteredNote(event.target.value);
    if (event.target.value.trim() === '@') {
      setShowDropDown(true);
    }
  };

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
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {showDropDown && (
            <div className={classes.dropDownPosition}>
              <Dropdown onSelect={getDropDownInput} />
            </div>
          )}
          <textarea
            id='username'
            type='text'
            value={enteredNote}
            onChange={usernameChangeHandler}
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
