import React from 'react';

const Button = (props) => {
  const {
    className, children, onClick
  } = props;
  return (
    <button type="button" className={className} onClick={onClick} formNoValidate={false}>
      <div className="btn-outer">
        <div className="btn-inner">
          {children}
        </div>
      </div>
    </button>
  );
};

Button.defaultProps = {
  className: 'btn',
  onClick: () => {}
};

export default Button;
