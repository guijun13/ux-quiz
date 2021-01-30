import React from 'react';

import QuizScreen from '../../src/screens/Quiz';

// eslint-disable-next-line react/prop-types
export default function ExternalQuizPage({ externalDb }) {
  return (
    // eslint-disable-next-line react/prop-types
    <QuizScreen externalQuestions={externalDb.questions} />
  );
}

export async function getServerSideProps(context) {
  const externalDb = await fetch('https://aluraquiz-base.alura-challenges.vercel.app/api/db')
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((serverResponseObject) => serverResponseObject)
    .catch((err) => {
      console.error(err);
    });

  console.log(context.query);

  return {
    props: {
      externalDb,
    },
  };
}
