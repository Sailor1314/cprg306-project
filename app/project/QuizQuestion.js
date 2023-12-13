import React from 'react';

const QuizQuestion = ({ question, options, onAnswer }) => {
    return (
        <div>
            <h2>{question}</h2>
            <div>
                {options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
