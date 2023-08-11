import { useState } from 'react';
import '@/styles/ToggleL.css';

function ToggleBtn() {
  const [isOn, setIsOn] = useState(false); 

  const toggleEvent = () => {
    setIsOn(state => !state);
  };

  return (
    <>
      <div
        className={`toggle-btnL ${isOn ? 'on' : 'off'}`}
      >
        <div className="circleL" onClick={toggleEvent}></div>
      </div>
    </>
  );
}

export default ToggleBtn;

