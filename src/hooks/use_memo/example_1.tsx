import { useState, useMemo } from 'react';

export const Example1: React.FC = () => {
    console.log('Rendering App...');

    const [number, setNumber] = useState(3)
    
    const result = useMemo(() => {
        slowFunction(number)
    },[number])

    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <p>Count: {count}</p>
            <p>Slow function result: {result}</p>
            <button onClick={() => setCount(() => count + 1)}>+</button>
        </div>
    );
}

const slowFunction = (num: number) => {
    console.log("Calling slow function...")
    for (let i = 0; i < 10000; i++)
        return (num * 2)
}

