import React, { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todo-context';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInput = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInput.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }
        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text"></label>
            <input id="text" type="text" ref={todoTextInput} />
            <button>Add Todo</button>
        </form>
    );
};
export default NewTodo;
