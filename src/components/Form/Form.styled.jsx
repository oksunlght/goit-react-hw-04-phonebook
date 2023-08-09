import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-top: 10px;

  width: 350px;

  padding: 8px 15px;

  color: #001133;
  font-size: 18px;

  border-radius: 5px;
  border: 2px solid #000;

  &:hover,
  &:focus {
    border: 2px solid #0077b3;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  font-size: 18px;
`;

export const SubmitBtn = styled.button`
  margin-bottom: 30px;

  width: 125px;
  height: 35px;

  color: #001133;
  font-size: 16px;

  background-color: #cceeff;

  border-radius: 5px;

  box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -webkit-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);
  -moz-box-shadow: 0px 0px 13px 2px rgba(102, 97, 97, 0.75);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #0077b3;
  }
`;
