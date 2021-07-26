import { memo, useCallback } from 'react';
import { Button } from 'antd';

const Control = memo(({
    setCount = () => {},
}) => {
    console.log('control rendered');

    const handleAdd = useCallback(() => {
        setCount(v => v + 1);
    }, [setCount]);

    const handleMinus = useCallback(() => {
        setCount(v => v - 1);
    }, [setCount]);

    const handleSet = useCallback(() => {
        setCount(() => 1);
    }, [setCount]);

    return (
        <div>
            <Button onClick={handleAdd}>add</Button>
            <Button onClick={handleMinus}>minus</Button>
            <Button onClick={handleSet}>set 1</Button>
        </div>
    )
});

export default Control;