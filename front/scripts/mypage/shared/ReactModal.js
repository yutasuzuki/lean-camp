import styled from 'styled-components';
import Modal from 'react-modal';

export const ReactModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border: 1px solid rgb(204, 204, 204);
  background: rgb(255, 255, 255);
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 6px -2px #000;
`;

export const ReactModalInner = styled.div`
  width: 480px;
`;

export const ReactModalBtnContainer = styled.div`
  text-align: right;

  & > * {
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;