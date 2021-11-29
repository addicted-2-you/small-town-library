import React from 'react';

import { nerr } from '~/utils/core.utils';

export type TModal = React.FunctionComponent<any>;

export interface IModalContext {
  showModal(key: string, component: TModal): void;
  hideModal(key: string): void;
}

export const ModalContext = React.createContext<IModalContext>({
  showModal: nerr,
  hideModal: nerr,
});
