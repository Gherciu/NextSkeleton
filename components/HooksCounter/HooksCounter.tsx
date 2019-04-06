import React, { useCallback, useState } from 'react';

interface IHooksCounter {
    count: number;
}
const HooksCounter = () => {
    const [state, setCount] = useState<IHooksCounter>({ count: 0 });
    const onCounterClick = useCallback(() => {
        setCount({ count: state.count + 1 });
    }, [state]);
    return (
        <div onClick={onCounterClick} style={{ cursor: 'pointer' }}>
            Click to increment HooksCounter:{state.count}
        </div>
    );
};
export default HooksCounter;
