import { useState } from 'react';
import '@/styles/ToggleS.css';

function ToggleOffBtn() {
  const [isOn, setIsOn] = useState(false); 

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

export default ToggleOffBtn;