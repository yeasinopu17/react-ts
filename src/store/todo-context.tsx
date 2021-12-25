import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextobj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextobj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, settodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        settodos((prevState) => {
            return prevState.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        settodos((prevState) => {
            return prevState.filter((todo) => todo.id !== todoId);
        });
    };

    const contextValue: TodosContextobj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider
