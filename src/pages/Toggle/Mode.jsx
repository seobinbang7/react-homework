import ToggleSOn from '@/pages/toggle/parts/ToggleSOn';
import ToggleSOff from '@/pages/toggle/parts/ToggleSOff';
import '@/styles/Mode.css';

function Mode () {
  return (
    <div>
      <h1 className='modeText'>mode</h1>
      <div className='onOffBox onBox'>
        <span>On</span><ToggleSOn></ToggleSOn>
      </div>
      <div className='onOffBox'>
        <ToggleSOff></ToggleSOff><span>Off</span>
      </div>
    </div>
  )
}

export default Mode;