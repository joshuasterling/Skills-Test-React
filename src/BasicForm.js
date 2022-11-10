import React, { useState, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';


function BasicForm() {
  const [todoList, setTodoList] = useState([]);
  const inputEl = useRef(null);

  const handleSubmit = () => {
    console.log('I submitted');
  };

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => { }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field ref={inputEl} id="todo" name="Add ToDo" placeholder="TextHere"></Field>
          <Button onClick={handleSubmit} type="submit" variant='contained'>Submit</Button>
        </Form>
      </Formik>
    </div>
  )
};

export default BasicForm
