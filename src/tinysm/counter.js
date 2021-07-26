import { memo } from 'react';
import { useSelector } from './tinysm';

const Counter = memo(() => {
    console.log('counter rendered');

    const count = useSelector(state => state.count);

    return (
        <div>
            count:
            {count}
        </div>
    )
});

export default Counter;