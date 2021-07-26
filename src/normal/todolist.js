import { memo } from 'react';
import DeleteTodo from './deletetodo';

const Todolist = memo(({
    todoItems = [],
    setTodoItems = () => {},
}) => {
    console.log('todolist rendered');

    return (
        <div style={{ marginTop: '10px' }}>
            <ul>
                {
                    todoItems.map((v, index) => (
                        <li key={index}>
                            <span style={{ marginRight: '10px' }}>{v}</span>
                            <DeleteTodo index={index} setTodoItems={setTodoItems} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
});

export default Todolist;