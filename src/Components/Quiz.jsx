import React, { useState } from 'react';
import quizData from '../Data/quiz';

const questions = quizData;

function Quiz() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
  if (selected) return;

  const isCorrect = Array.isArray(questions[current].answer)
    ? questions[current].answer.includes(option)
    : option === questions[current].answer;

  setSelected({
    option,
    correct: isCorrect,
  });

  let nextScore = score;

  if (isCorrect) {
    nextScore++;
    setScore(nextScore);
  }

  setTimeout(() => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }, 1000);
};

  if (finished) {
    return (
      <section className="quiz">
        <h2>Quiz Complete ❤️</h2>

        <p>
          You scored {score} out of {questions.length}
        </p>
      </section>
    );
  }

  return (
    <section className="quiz">
      <h2>How Well Do You Know Us? ❤️</h2>

      <div className="quiz-card">
        <h3>{questions[current].question}</h3>

        <div className="quiz-options">
          {questions[current].options.map((option) => (
            <button
              key={option}
              className={`quiz-btn ${
                selected
                  ? Array.isArray(questions[current].answer)
                    ? questions[current].answer.includes(option)
                      ? 'correct'
                      : option === selected.option
                      ? 'wrong'
                      : ''
                    : option === questions[current].answer
                    ? 'correct'
                    : option === selected.option
                    ? 'wrong'
                    : ''
                  : ''
              }`}
              disabled={selected !== null}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {selected && (
          <>
            <p className={selected.correct ? "correct-text" : "wrong-text"}>
              {selected.correct ? "Correct! ❤️" : "Oops! 😂"}
            </p>
            
            {current === 1 &&
              selected.correct &&
              selected.option === "Dat Ass" && (
              
                <p className="special-message">
                  Jk 😹 but dat ass ain't second to none tho 🤭❤️
                </p>
            )}
          </>

)}
      </div>
    </section>
  );
}

export default Quiz;