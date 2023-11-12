// components/Typewriter.tsx
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    styling: string;
    typingDelay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, styling, typingDelay = 100 }) => {
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setCurrentText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, typingDelay);

        return () => clearInterval(intervalId);
    }, [text, typingDelay]);

    return <div className={styling}>{currentText}</div>;
};

export default Typewriter;
