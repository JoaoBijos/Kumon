import React from 'react'

import {
  Container,
  Content,
  Title
} from './style';


import Cards from './components/Cards'

function App() {
  return (
    <Container>
      <Content>
        <Title>
          Bem-vindo a nossa Plataforma !
        </Title>
        <Cards/>
      </Content>
    </Container>
  );
}

export default App;
