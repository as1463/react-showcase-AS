import './App.css';
import styled from 'styled-components';
import linkedin from './images/linkedin.png';

function Welcome(props){
  return <p>Hello, {props.name}</p>
}

const description_text = 'Hello, my name is Alyssa and welcome to my personal GitHub Page! \n \n I wanted to create this page to display some of my personal artwork that I have created over the years, as well as have the chance to personally learn some React skills on my own time. I am someone that prioritizes my classwork, but found an interest in UI work when I had the opportunity to tinker with some React development in an internship. I hope you like what you see!';

const linkedIn = 'https://www.linkedin.com/in/alyssa-spanganberg-233a111a3/';

const Base = styled.div`
  background-color: #7d998e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: inherit;
  flex-direction: inherit;
  align-items: center;
`;

const TitleBox = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 5px solid #15ab8a;
  color: white;
  border-radius: 25px;
  font-size: 40px;
  max-width: max-content;
  font-family: sans-serif;
  background-color: #0a5444;
  box-shadow: 0px 5px 10px #171a19;
`;

const TextBox = styled.p`
  margin: 10px;
  text-align: center;
  border: 1px solid black; 
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  white-space: pre-line;
  font-size: 15px;
`;

const ImageContainer = styled.div`
  align-items: left;
`;

const LinkButton = styled.button`
  font-size: 20px;
  max-width: max-content;
  background-color: #0c3f9c;
  border: 1px solid #0c3f9c;
  border-radius: 5px;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
      background-color: #114ebf;
      border: 1px solid #114ebf;
      cursor: pointer;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {

  return (
    <Base>
      <Header>
        <TitleBox>
          Welcome to My Showcase
        </TitleBox>
      </Header>
      <TextBox>
        {description_text}
      </TextBox>
      <Links>
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <LinkButton> 
            <img style={{width: 20, height: 20, backgroundColor: 'white', borderRadius: 4}} src={linkedin} alt='LinkedIn Logo'></img>
            Linkedin 
          </LinkButton>
        </a>
      </Links>
    </Base>
  );
}

export default App;
