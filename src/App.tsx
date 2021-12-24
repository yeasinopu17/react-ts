import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import { useState } from 'react';

function App() {
    const [todos, settodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        settodos((prevState) => {
            return prevState.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string)=>{
        settodos((prevState) => {
            return prevState.filter(todo => todo.id !== todoId);
        });
    }

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} onRemoveTodo={removeTodoHandler} />
        </div>
    );
}

export default App;
