"use client"

import React from "react";
import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    speed: number;
}

const TypeWriter: React.FC<TypewriterProps> = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, speed, text]);

    return (
        <span className="mt-4 tracking-wide text-wrap text-justify text-black dark:text-white">{displayedText}</span>
    );
}

export default TypeWriter;

