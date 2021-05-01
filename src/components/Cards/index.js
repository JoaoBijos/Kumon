import React from 'react'

import {
  Container,
  Content,
  Cards,
  Card,
  Title
} from './index.ts';

import Homework from '../../assets/images/homework.png'
import Calendario from '../../assets/images/calendar.png'
import Duvidas from '../../assets/images/duvidas.png'

function App() {
  return (
    <Container>
      <Content>
        <Cards>
          <Card>
            <img src={Homework}/>
            <Title> Homework </Title>
          </Card>
          <Card>
            <img src={Calendario}/>
            <Title> Calendário </Title>
          </Card>
          <Card>
            <img src={Duvidas}/>
            <Title> Dúvidas </Title>
          </Card>
        </Cards>
      </Content>
    </Container>
  );
}

export default App;