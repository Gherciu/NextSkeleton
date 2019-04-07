import React, { useCallback, useState } from 'react';

const HooksCounter = () => {
    const [count, setCount] = useState(0);
    const onCounterClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div onClick={onCounterClick} className='hooks-counter'>
            Click to increment HooksCounter:{count}
            <style jsx>
                {`
                    .hooks-counter{
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    );
};
export default HooksCounter;
