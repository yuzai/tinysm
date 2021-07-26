import { memo, useCallback, useRef } from 'react';
import { Button } from 'antd';

const AddTodo = memo(({
    setTodoItems = () => {},
}) => {
    console.log('addtodo rendered');
    const inputRef = useRef(null);
    const handleAdd = useCallback(() => {
        setTodoItems((v) => [...v, inputRef.current.value]);
        inputRef.current.value = '';
    }, [setTodoItems]);

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