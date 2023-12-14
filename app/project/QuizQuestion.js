import React from 'react';

const QuizQuestion = ({ question, options, onAnswer }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="mt-5 mb-5 text-2xl font-bold text-center">{question}</h2>
            <div className="flex flex-col items-center">
                {options.map((option, index) => (
                    <button 
                        key={index} 
                        onClick={() => onAnswer(option)}
                        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
