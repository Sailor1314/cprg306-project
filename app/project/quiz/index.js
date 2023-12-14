"use client"

// pages/index.js
import React, { useState } from 'react';
import quizData from '../quizData.json';
import QuizQuestion from '../QuizQuestion';
import { useRouter } from 'next/router';

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    // const router = useRouter();

    const handleAnswer = (answer) => {
        if (answer === quizData[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            router.push(`/result?score=${score}`);
        }
    };

    return (
        <div>
            <h1>Quiz App</h1>
            <QuizQuestion 
                question={quizData[currentQuestionIndex].question} 
                options={quizData[currentQuestionIndex].options} 
                onAnswer={handleAnswer} 
            />
        </div>
    );
};

export default Quiz;
