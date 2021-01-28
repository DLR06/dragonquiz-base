import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from 'next/head';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta property="og:image"content="https://images2.alphacoders.com/474/thumb-1920-474477.jpg"/>

        <title>DragonQuiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Dragon Ball Z</h1>
          </Widget.Header>
          
          <Widget.Content>

            <p>oasdhfsadhf kslajhdfkjlsahdfkjl kjlasdhfk</p>
          </Widget.Content>
        </Widget>

        <Widget>        
          <Widget.Content>
            <h1>Dragon Ball Z</h1>

            <p>oasdhfsadhf kslajhdfkjlsahdfkjl kjlasdhfk</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/DLR06" />
    </QuizBackground>
  );
}
