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
                        color: rgb(${count * 25},0,0);
                    }
                `}
            </style>
        </div>
    );
};
export default HooksCounter;
