import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todo-context';

const Todos = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.list}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
