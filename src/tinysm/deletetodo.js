import { memo, useCallback } from 'react';
import { Button } from 'antd';
import { useDispatch } from './tinysm';

const DeleteTodo = memo(({
    index = 0,
}) => {
    console.log(`deletetodo ${index} rendered`);
    const dispatch = useDispatch();

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