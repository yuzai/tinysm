import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from './tinysm';

const Counter = memo(() => {
    console.log('counter rendered');

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'getAfterThreeSec',
            payload: 'test',
        });
    }, [dispatch]);

    return (
        <div>
            count:
            {count}
        </div>
    )
});

export default Counter;