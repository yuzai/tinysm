import { memo, useCallback } from 'react';
import { Button } from 'antd';
import { useStore } from './privider';

const DeleteTodo = memo(({
    index = 0,
}) => {
    console.log(`deletetodo ${index} rendered`);
    const [, dispatch] = useStore();

    const handleDelete = useCallback(() => {
        dispatch({
            type: 'DELETE_TODO',
            payload: index,
        });
    }, [index, dispatch]);

    return (
        <Button onClick={handleDelete}>delete</Button>
    )
});

export default DeleteTodo;