import { memo } from 'react';
import DeleteTodo from './deletetodo';
import { useSelector } from './tinysm';

const Todolist = memo(() => {
    console.log('todolist rendered');
    const todoItems = useSelector(state => state.todoItems);

    return (
        <div style={{ marginTop: '10px' }}>
            <ul>
                {
                    todoItems.map((v, index) => (
                        <li key={index}>
                            <span style={{ marginRight: '10px' }}>{v}</span>
                            <DeleteTodo index={index} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
});

export default Todolist;