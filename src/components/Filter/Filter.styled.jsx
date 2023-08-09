import styled from '@emotion/styled';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  font-size: 18px;
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
