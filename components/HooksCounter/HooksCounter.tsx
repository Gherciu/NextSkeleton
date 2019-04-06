import React, { useCallback, useState } from 'react';

const HooksCounter = () => {
    const [count, setCount] = useState<number>(0);
    const onCounterClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div onClick={onCounterClick} style={{ cursor: 'pointer' }}>
            Click to increment HooksCounter:{count}
        </div>
    );
};
export default HooksCounter;
