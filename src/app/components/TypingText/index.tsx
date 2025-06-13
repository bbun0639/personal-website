"use client";

import { useState, useEffect } from "react";

const words = ["Frontend Developer", "Web Developer", "Software Developer"];

export default function TypingText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 2000); // Delay after <Loader /> finished
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    const currentWord = words[currentWordIndex];
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed /= 2; // Speed up to deletion
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        const nextText = isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1);
        return nextText;
      });

      if (!isDeleting && displayedText === currentWord) {
        // Wait until the word is fully typed
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, startTyping]);

  return (
    <div className="text-20 md:text-24 md:h-8 h-7">
      <span className="transition-colors dark:text-green-500 text-orange-500 duration-1000">
        {displayedText}
      </span>
    </div>
  );
}
