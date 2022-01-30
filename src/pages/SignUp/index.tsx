import React from 'react';

import { Container, Form, Title, Input, Buttons } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Form action="">
        <Title className="title">
          Manage<span>IT</span>
        </Title>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Login" />
        <Input type="password" placeholder="Password" />
        <Buttons>
          <button className="finish" type="submit">
            Finalizar
          </button>
          <button className="cancel" type="button">
            Cancelar
          </button>
        </Buttons>
      </Form>
    </Container>
  );
};

export default SignUp;
