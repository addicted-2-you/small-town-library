import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  const { handleClose, isVisible, children } = props;

  const visibilityClassName = React.useMemo(() => (isVisible ? 'block' : 'hidden'), [isVisible]);

  React.useEffect(() => {
    if (!isVisible) {
      handleClose();
    }
  }, [isVisible]);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 ${visibilityClassName}`}
    >
      <div className="p-3 bg-white shadow-md rounded-md">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func,
  isVisible: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  handleClose: () => {},
};

export default Modal;
