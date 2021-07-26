import { memo, useCallback, useRef } from 'react';
import { Button } from 'antd';
import { useDispatch } from './tinysm';

const AddTodo = memo(() => {
    console.log('addtodo rendered');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const handleAdd = useCallback(() => {
        dispatch({
            type: 'ADD_TODO',
            payload: inputRef.current.value
        });
        inputRef.current.value = '';
    }, [dispatch]);

    return (
        <div style={{
            display: 'flex',
            marginTop: '20px'
        }}>
            <input type='text' ref={inputRef} />
            <Button onClick={handleAdd}>add</Button>
        </div>
    )
});

export default AddTodo;