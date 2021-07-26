import { memo, useCallback } from 'react';
import { Button } from 'antd';
import { useDispatch } from './tinysm';

const Control = memo(() => {
    console.log('control rendered');

    const dispatch = useDispatch();

    const handleAdd = useCallback(() => {
        dispatch({
            type: 'ADD',
        });
    }, [dispatch]);

    const handleMinus = useCallback(() => {
        dispatch({
            type: 'MINUS',
        });
    }, [dispatch]);

    const handleSet = useCallback(() => {
        dispatch({
            type: 'SET',
            payload: 1,
        });
    }, [dispatch]);

    return (
        <div>
            <Button onClick={handleAdd}>add</Button>
            <Button onClick={handleMinus}>minus</Button>
            <Button onClick={handleSet}>set 1</Button>
        </div>
    )
});

export default Control;