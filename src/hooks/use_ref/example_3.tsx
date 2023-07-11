import React, { useRef, useEffect } from 'react';

export const Example3: React.FC = () => {

    const scrollRef = useRef(0);

    const handleScroll = () => {
        scrollRef.current = window.scrollY;
        console.log(scrollRef.current)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // <p> Scroll position... </p> here will always show 0 
    // If we wanted to show the updated scrollRef.current value 
    // (as displaying in the browser console) we would need to store this in some state

    return (
        <div style={{ height: "200vh" }}>
            <p>Scroll Position: {scrollRef.current}px</p>
        </div>
    );
}