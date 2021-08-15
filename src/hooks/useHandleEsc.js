import { useEffect } from 'react';

export function useHandleEsc(handler) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') {
        handler();
      }
    }

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  });
}
