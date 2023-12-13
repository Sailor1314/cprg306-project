import React, { useState } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import quizData from '../data/quizData.json';
import { useRouter } from 'next/router';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
  }, []);
  const router = useRouter();

  const handleAnswer = (selectedOption) => {
    const question = quizData[currentQuestionIndex];
    if (selectedOption === question.answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        router.push(`/result?score=${score}`);
    }
  };

  const question = quizData[currentQuestionIndex];

  return (
    <div>
      <QuizQuestion
        question={question.question}
        options={question.options}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
