import React from 'react'

import {
  Container,
  Content
} from './style';


import Cards from './components/Cards'

function App() {
  return (
    <Container>
      <Content>
        <h1 style={{
          maxWidth:'468px',
          display: 'flex',
          flexWrap: 'wrap',
          color: '#90ECFF',
        }}>
          Bem Vindo a nossa Plataforma !
        </h1>
        <Cards/>
      </Content>
    </Container>
  );
}

export default App;
