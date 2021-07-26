import { useState } from 'react';
import Counter from './counter';
import Control from './control';
import TodoList from './todolist';
import AddTodo from './addtodo';

const App = () => {
    console.log('normal app rendered');
    const [count, setCount] = useState(0);
    const [todoItems, setTodoItems] = useState([
        'first',
        'second',
        'third',
        'forth',
    ]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px'
        }}>
            <Counter count={count} />
            <Control setCount={setCount} />
            <AddTodo setTodoItems={setTodoItems} />
            <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
    )
};

export default App;