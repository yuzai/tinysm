import { memo, useCallback } from 'react';
import { Button } from 'antd';

const DeleteTodo = memo(({
    index = 0,
    setTodoItems = () => {},
}) => {
    console.log(`deletetodo ${index} rendered`);

    const handleDelete = useCallback(() => {
        setTodoItems(v => {
            const arr = [...v];
            arr.splice(index, 1);
            return arr;
        });
    }, [index, setTodoItems]);

    return (
        <Button onClick={handleDelete}>delete</Button>
    )
});

export default DeleteTodo;