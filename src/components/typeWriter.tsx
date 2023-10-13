import React, { useState, useEffect } from "react";

interface TypewriterProps {
	text: string;
	delay: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay }) => {
	const [currentText, setCurrentText] = useState<string>("");
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isTypingBackwards, setIsTypingBackwards] = useState<boolean>(false);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			if (!isTypingBackwards) {
				if (currentIndex < text.length) {
					setCurrentText(text.slice(0, currentIndex + 1));
					setCurrentIndex(currentIndex + 1);
				} else {
					// Start erasing text
					setIsTypingBackwards(true);
				}
			} else {
				if (currentIndex > 0) {
					setCurrentText(text.slice(0, currentIndex - 1));
					setCurrentIndex(currentIndex - 1);
				} else {
					// Stop erasing and start typing again
					setIsTypingBackwards(false);
				}
			}
		}, delay);

		return () => {
			clearInterval(typingInterval);
		};
	}, [text, delay, currentIndex, isTypingBackwards]);

	return <span>{currentText}</span>;
};

export default Typewriter;
