import { useState } from 'react';
import '@/styles/ToggleS.css';

function ToggleOnBtn() {
  const [isOn, setIsOn] = useState(true); 

  const toggleEvent = () => {
    setIsOn(state => !state);
  };

  return (
    <>
      <div
        className={`toggle-btnS ${isOn ? 'on' : 'off'}`}
      >
        <div className="circleS" onClick={toggleEvent}></div>
      </div>
    </>
  );
}

export default ToggleOnBtn;