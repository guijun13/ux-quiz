import React from 'react';

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

export default function QuizPage() {
  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta 1 de
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img
            src="https://placehold.it/400x400"
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
          />
          <Widget.Content>

            <h2>Titulo</h2>
            <p>Descrição</p>

            <Button>
              Confirmar
            </Button>
          </Widget.Content>
        </Widget>

        <LoadingScreen />

      </QuizContainer>
    </QuizBackground>
  );
}
