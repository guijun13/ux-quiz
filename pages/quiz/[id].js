/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import QuizScreen from '../../src/screens/Quiz';

export default function ExternalQuizPage({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen externalQuestions={externalDb.questions} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUsername] = context.query.id.split('___');
  try {
    const externalDb = await fetch(`https://${projectName}.${githubUsername}.vercel.app/api/db`)
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
  } catch (err) {
    throw new Error(err);
  }
}
