import styled from 'styled-components';

export const Btn = styled.a`
  font-family: 'Raleway', sans-serif;
  padding: 6px 15px 5px;
  font-size: 12px;
  text-decoration: none;
  color: #fff;
  background-color: #369efb;
  border-radius: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2a85d7;
  }
`;

export const BtnPrimary = styled(Btn)`
  color: #fff;
  background-color: #369efb;

  &:hover {
    background-color: #2a85d7;
  }
`;

export const BtnCancel = styled(Btn)`
  background-color: #999;
  color: #fff;

  &:hover {
    background-color: #666;
    color: #fff;
  }
`;

export const BtnDelete = styled(Btn)`
  background-color: #f00;
  color: #fff;

  &:hover {
    background-color: #d00;
    color: #fff;
  }
`;
