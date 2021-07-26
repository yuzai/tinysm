import { memo } from 'react';

const Counter = memo(({
    count = 0,
}) => {
    console.log('counter rendered');

    return (
        <div>
            count:
            {count}
        </div>
    )
});

export default Counter;