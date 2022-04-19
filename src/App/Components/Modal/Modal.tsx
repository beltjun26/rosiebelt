import React, { SyntheticEvent } from "react";
import * as S from "./Modal.styles";

export interface ModalProps {
  close: () => void;
}

export const Modal: React.FC<ModalProps> = ({ close, children }) => {
  /**
   * Close the modal
   * @param {SyntheticEvent} e event
   */
  function closeModal(e: SyntheticEvent) {
    e.stopPropagation();
    close();
  }

  return (
    <S.Modal onClick={closeModal}>
      <S.Container onClick={(event) => event.stopPropagation()}>
        {children}
      </S.Container>
    </S.Modal>
  );
};
