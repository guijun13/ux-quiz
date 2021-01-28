/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingScreen() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
      />
      <Widget.Content>

        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form>

          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternative}
                  type="radio"
                  name={questionId}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button>
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>

  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LAODING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const questionIndex = 0;
  const totalQuestions = db.questions.length;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  return (
    <QuizBackground>
      <QuizContainer>

        {screenState === screenStates.QUIZ
         && (
         <QuestionWidget
           question={question}
           totalQuestions={totalQuestions}
           questionIndex={questionIndex}
         />
         )}

        {screenState === screenStates.LOADING && <LoadingScreen />}

        {screenState === screenStates.RESULT && <div>Voce acertou x questões, parabéns!</div>}

      </QuizContainer>
    </QuizBackground>
  );
}
