import React from 'react';
import '../css/PopupModal.css'; // 스타일링을 위한 CSS 파일

const PopupModal = ({ title, category, start, end, description, onClose, x, y }) => {
  const popupStyle = {
    position: 'fixed',
    top: y,
    left: x,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className='pop' style={popupStyle}>
      <div className='top'>
        <h4 className='title'>{title}</h4>
        <div className='group'>
          <span></span>{category}
        </div>
      </div>
      <p className='date'>{start} ~ {end}</p>
      <div className='desc'>{description}</div>
      <div className='btns'>
        <button onClick={onClose}>수정</button>
        <button onClick={onClose}>지우기</button>
      </div>
    </div>
  );
};

export default PopupModal;
