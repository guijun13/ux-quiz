import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz de UX</h1>
          </Widget.Header>
          <Widget.Content>

          <p>Responda as perguntas e verifique seu conhecimento de UX Design!</p>

          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Outros quizzes da galera</h1>
          </Widget.Header>
          <Widget.Content>

          <p>Veja aqui os outros quizzes da galera</p>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/guijun13" />
    </QuizBackground>
  )
}
