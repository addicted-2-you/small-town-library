import React from 'react';

import { TModal, ModalContext } from './ModalContext';

import ModalRoot from './ModalRoot';

export interface IModalProviderProps {
  container?: Element;
  rootComponent?: React.ComponentType<any>;
  children: React.ReactNode;
}

function ModalProvider({ container, rootComponent, children }: IModalProviderProps) {
  const [modals, setModals] = React.useState<Record<string, TModal>>({});

  const showModal = React.useCallback((key: string, modal: TModal) => {
    setModals((latestModals) => ({
      ...latestModals,
      [key]: modal,
    }));
  }, []);

  const hideModal = React.useCallback(
    (key: string) => {
      setModals((latestModals) => {
        if (latestModals[key]) {
          const modalsCopy = { ...latestModals };
          delete modalsCopy[key];
          return modalsCopy;
        }

        return latestModals;
      });
    },
    [modals],
  );

  const contextValue = React.useMemo(() => ({ showModal, hideModal }), []);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalRoot modals={modals} component={rootComponent} container={container} />
    </ModalContext.Provider>
  );
}

export default ModalProvider;
