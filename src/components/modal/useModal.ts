// Stolen from here - https://github.com/mpontus/react-modal-hook

import React from 'react';

import { ModalContext, TModal } from './ModalContext';

import { createIncremenator } from '~/utils/incremenator';

const incremenator = createIncremenator();

export function useModal(component: TModal, inputs: React.DependencyList = []) {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  const context = React.useContext(ModalContext);

  const key = React.useMemo(() => `${incremenator()}`, inputs);
  const modal = React.useMemo(() => component, inputs);

  const showModal = React.useCallback(() => setIsShown(true), []);
  const hideModal = React.useCallback(() => setIsShown(false), []);

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
