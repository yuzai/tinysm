import { memo } from 'react';
import { useStore } from './privider';

const Counter = memo(() => {
    console.log('counter rendered');

    const [state] = useStore();

    return (
        <div>
            count:
            {state.count}
        </div>
    )
});

export default Counter;