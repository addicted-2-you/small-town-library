import React from 'react';

// icons
import timesSolid from '~/icons/times-solid.svg';

interface IModalWrapperProps {
  children: React.ReactNode;
  title: string;
  hide(): void;
}

function ModalWrapper({ children: modalContent, title, hide }: IModalWrapperProps) {
  function onModalClick(e: React.MouseEvent<HTMLElement>) {
    if (
      e.nativeEvent.target?.classList?.contains('modal-black-overlay') ||
      e.nativeEvent.target?.classList.contains('close-modal-button') ||
      e.nativeEvent.target?.classList.contains('close-modal-button-img')
    ) {
      hide();
    }
  }

  return (
    // TODO: Move shared stuff to the component
    <div className="modal-black-overlay absolute left-0 top-0 h-full w-full flex justify-center items-center bg-black bg-opacity-70">
      <div className="p-5 bg-gray-50 rounded-xl">
        <header className="flex justify-between">
          <strong>{title}</strong>

          <div className="space-x-2">
            <button className="close-modal-button" type="button" onClick={onModalClick}>
              <img
                className="close-modal-button-img"
                width="16"
                height="16"
                src={timesSolid}
                alt="close"
              />
            </button>
          </div>
        </header>

        {modalContent}
      </div>
    </div>
  );
}

export default ModalWrapper;
