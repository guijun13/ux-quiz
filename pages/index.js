import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz de UX</h1>
          </Widget.Header>
          <Widget.Content>

            <p>Responda as perguntas e verifique seu conhecimento de UX Design!</p>

            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                type="text"
                name="nomeDoUsuario"
                value={name}
                placeholder="Digite seu nome"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Outros quizzes da galera</h1>
          </Widget.Header>
          <Widget.Content>

            <p>Veja aqui os outros quizzes da galera</p>

            <ul>
              {db.external.map((externalLink) => {
                const [projectName, githubUsername] = externalLink
                  .replace(/\//g, '') // replace all backslashes to blank
                  .replace('https:', '') // replace 'https' to blank
                  .replace('.vercel.app', '') // replace '.vercel.app' to blank
                  .split('.'); // split the finished sentence based on the dot
                return (
                  <li key={externalLink}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUsername}`}
                    >
                      {`${githubUsername}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/guijun13" />
    </QuizBackground>
  );
}
