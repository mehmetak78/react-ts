import React, {useState} from 'react';

import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";

function App() {

    const [todos, setTodos] = useState<Todo[]>([]);


    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        })
    }
    
    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos}/>
        </div>
    );
}

export default App;
