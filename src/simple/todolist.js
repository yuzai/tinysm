import { memo } from 'react';
import DeleteTodo from './deletetodo';
import { useStore } from './privider';

const Todolist = memo(() => {
    console.log('todolist rendered');
    const [state] = useStore();

    return (
        <div style={{ marginTop: '10px' }}>
            <ul>
                {
                    state.todoItems.map((v, index) => (
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