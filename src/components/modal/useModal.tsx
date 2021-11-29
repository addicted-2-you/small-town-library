// Stolen from here - https://github.com/mpontus/react-modal-hook

import React from 'react';

import { ModalContext, TModal } from './ModalContext';
import ModalWrapper from './ModalWrapper';

import { createIncremenator } from '~/utils/incremenator';

const incremenator = createIncremenator();

interface IUseModalParams {
  ModalContent: TModal;
  inputs: React.DependencyList;
  title?: string;
}

export function useModal({ ModalContent, inputs = [], title = '' }: IUseModalParams) {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  const context = React.useContext(ModalContext);

  const showModal = React.useCallback(() => setIsShown(true), []);
  const hideModal = React.useCallback(() => setIsShown(false), []);

  const key = React.useMemo(() => `${incremenator()}`, inputs);
  const modal = React.useMemo(
    () => () =>
      (
        <ModalWrapper title={title} hide={hideModal}>
          <ModalContent />
        </ModalWrapper>
      ),
    inputs,
  );

  React.useEffect(() => {
    if (isShown) {
      context.showModal(key, modal);
    } else {
      context.hideModal(key);
    }

    return () => {
      context.hideModal(key);
    };
  }, [modal, isShown]);

  return {
    showModal,
    hideModal,
  };
}
