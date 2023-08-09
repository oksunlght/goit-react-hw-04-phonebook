import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;

  color: #001133;
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const DeleteBtn = styled.button`
  margin-left: 25px;

  width: 90px;
  height: 30px;

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
