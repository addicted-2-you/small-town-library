import React from 'react';
import ReactDOM from 'react-dom';

import { TModal } from './ModalContext';

interface IModalRendererProps {
  component: TModal;
}

interface IModalRootProps {
  modals: Record<string, TModal>;
  component?: React.ComponentType<any>;
  container?: Element;
}

const ModalRenderer = React.memo(({ component, ...rest }: IModalRendererProps) => component(rest));

function ModalRoot({
  modals,
  container,
  component: RootComponent = React.Fragment,
}: IModalRootProps) {
  const [mountNode, setMountNode] = React.useState<Element | undefined>(undefined);

  React.useEffect(() => setMountNode(container || document.body));

  return mountNode
    ? ReactDOM.createPortal(
        <RootComponent>
          {Object.keys(modals).map((key) => (
            <ModalRenderer key={key} component={modals[key]} />
          ))}
        </RootComponent>,
        mountNode,
      )
    : null;
}

export default ModalRoot;
