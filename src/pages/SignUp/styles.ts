import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 450px;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 20px;
`;

export const Title = styled.h1`
  margin-top: 40px;

  span {
    color: #a443b4;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 350px;
  margin-top: 30px;
  padding: 0px 10px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;

  &::placeholder {
    color: #7b7878;
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  margin-top: 10px;

  label {
    cursor: pointer;
    margin-left: 5px;
    font-size: 12px;
    color: #7b7878;
  }
`;

export const Buttons = styled.div`
  width: 350px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  .finish {
    background-color: #a443b4;
  }

  .cancel {
    background-color: #4792a3;
  }
`;
