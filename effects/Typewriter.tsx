'use client'
import React, { useState, useEffect } from 'react';
import { text } from 'stream/consumers';

const Typewriter = () => {
    const [currentText, setCurrentText] = useState('');
    let textListIndex = 0;
    let index = 0;
    let typingForward = true;
    const textList = ['F ull Stack Developer', 'A spiring Entrepreneur', 'F ull-Time Idiot', 'P art-Time Academic Weapon'];
    let text = textList[textListIndex];

    useEffect(() => {
        const intervalId = setInterval(() => {
            
            if (typingForward) {
                setCurrentText((prev) => prev + text.charAt(index));
                index++;
                if (index == text.length) {
                    typingForward = false;
                }
            } else {
                setCurrentText((prev) => prev.slice(0, -1));
                index--;
                if (index == 0) {
                    typingForward = true;
                    textListIndex = (textListIndex==3) ? 0 : (textListIndex + 1) 
                    text = textList[textListIndex];
                }
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, []); // Dependencies array should be empty to avoid resetting the effect unnecessarily

    return <div className='font-bold text-6xl text-white'>{currentText}</div>;
};

export default Typewriter;
