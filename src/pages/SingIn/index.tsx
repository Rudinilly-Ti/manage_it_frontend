import React from 'react';

import { Container, Form, Title, Input, Check, Buttons } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Form action="">
        <Title className="title">
          Manage<span>IT</span>
        </Title>
        <Input type="email" placeholder="Login" />
        <Input type="password" placeholder="Password" />
        <Check>
          <input type="checkbox" id="logged" />
          <label htmlFor="logged">Mantenha-me conectado</label>
        </Check>
        <Buttons>
          <button className="login" type="submit">
            Entrar
          </button>
          <button className="signup" type="button">
            Cadastrar
          </button>
        </Buttons>
      </Form>
    </Container>
  );
};

export default SignIn;
