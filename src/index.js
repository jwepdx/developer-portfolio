import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faHome, faListUl, faArchive } from '@fortawesome/free-solid-svg-icons';

library.add(
  faCodepen,
  faGithub,
  faEnvelope,
  faFileAlt,
  faHome,
  faListUl,
  faArchive
);

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({
  theme,
}) => theme.secondary});
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CopyRight = styled.p`
  margin-top: 3em;
  color: #ffffff;
`;

// Theme URL: https://coolors.co/6200ee-1dd3b0-009ffd-f55d3e-191923

ReactDOM.render(
  <StrictMode>
    <ThemeProvider
      theme={{
        primary: '#6200EE',
        secondary: '#1DD3B0',
        info: '#009FFD',
        error: '#F55D3E',
        muted: '#191923',
      }}>
      <GlobalStyles />
      <Container>
        <ContentContainer>
          <App />
        </ContentContainer>
        <CopyRight>&copy; 2020 Jacob Evans, all rights reserved</CopyRight>
      </Container>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
